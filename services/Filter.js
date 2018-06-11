const Sequelize = require('sequelize')

const { Op } = Sequelize

const is = (input) => {
  return Object.prototype.toString.call(input)
}

/**
 * This is a Class used for quick filtering and searching in sequelize
 * @class Filter
 * @param {Object} sourceObject The source input of filtering or searching, key is label, value is content
 * @return {Object} Plain object that can be directly used for sequelize query
 */
class Filter {
  constructor(sourceObject = {}) {
    this.sourceObject = {}
    // Clone and assign but not just assign
    // Otherwise the input sourceObject will be modified later
    Object.assign(this.sourceObject, sourceObject)
  }

  alias(aliasList = {}) {
    if (is(aliasList) !== '[object Object]') {
      throw new Error('Input of alias should be an object')
    }
    for (let key in aliasList) {
      if (aliasList.hasOwnProperty(key)) {
        const alias = aliasList[key]

        // Remove the origin property 
        if (this.sourceObject.hasOwnProperty(key)) {
          delete this.sourceObject[key]
        }

        // Add a new property using alias and give it origin value
        if (this.sourceObject.hasOwnProperty(alias)) {
          this.sourceObject[key] = this.sourceObject[alias]
          delete this.sourceObject[alias]
        }
      }
    }
    return this
  }

  filterBy(keys = []) {
    const source = this.sourceObject
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        if (keys.indexOf(key) !== -1) {
          const query = decodeURI(source[key])
          // Do not filter with empty string
          if (query !== '') {
            this[key] = query.split(',')
          }
        }
      }
    }
    return this
  }

  searchBy(keys = []) {
    const arr = []
    const { search } = this.sourceObject

    keys.map((value) => {
      arr.push({ [value]: { [Op.like]: `%${decodeURI(search)}%` } })
    })
   
    if (search) {
      this[Op.or] = arr 
    }
    return this
  }

  done() {
    // Return plain object for sequelize
    let obj = {}
    for (let key in this) {
      if (this.hasOwnProperty(key)) {
        obj[key] = this[key]
      }
    }

    if (this[Op.or]) {
      obj[Op.or] = this[Op.or]
    }
    
    delete obj.sourceObject
    if (!Object.keys(obj).length && !obj[Op.or]) { return null }
    return obj
  }
}

module.exports = Filter