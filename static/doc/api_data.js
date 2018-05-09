define({ "api": [
  {
    "type": "delete",
    "url": "/api/avatars",
    "title": "Delete a avatar",
    "group": "Avatars",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The creator's user ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>void</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/avatars.js",
    "groupTitle": "Avatars",
    "name": "DeleteApiAvatars"
  },
  {
    "type": "get",
    "url": "/api/avatars",
    "title": "Get all avatars",
    "group": "Avatars",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all avatars</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/avatars.js",
    "groupTitle": "Avatars",
    "name": "GetApiAvatars"
  },
  {
    "type": "get",
    "url": "/api/avatars/user_id/:id",
    "title": "Get a user avatar",
    "group": "Avatars",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "binary",
            "optional": false,
            "field": "void",
            "description": "<p>The user avatar</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/avatars.js",
    "groupTitle": "Avatars",
    "name": "GetApiAvatarsUser_idId"
  },
  {
    "type": "post",
    "url": "/api/avatars",
    "title": "Update a avatar",
    "group": "Avatars",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the avatar file encoded in base64</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mime",
            "description": "<p>The MIME of the file</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The creator's user ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The updated avatar</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/avatars.js",
    "groupTitle": "Avatars",
    "name": "PostApiAvatars"
  },
  {
    "type": "put",
    "url": "/api/avatars",
    "title": "Create a avatar",
    "group": "Avatars",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the image file encoded in base64</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mime",
            "description": "<p>The MIME of the file</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The creator's user ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created avatar</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/avatars.js",
    "groupTitle": "Avatars",
    "name": "PutApiAvatars"
  },
  {
    "type": "delete",
    "url": "/api/classes/:id",
    "title": "Delete a class",
    "group": "Classes",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>void</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/classes.js",
    "groupTitle": "Classes",
    "name": "DeleteApiClassesId"
  },
  {
    "type": "get",
    "url": "/api/classes",
    "title": "Get all classes",
    "group": "Classes",
    "description": "<p>Class is ordered by start time in ASC order by default</p>",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "finished",
            "defaultValue": "0,1",
            "description": "<p>Filtered by if the class is finished</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all classes</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/classes.js",
    "groupTitle": "Classes",
    "name": "GetApiClasses"
  },
  {
    "type": "post",
    "url": "/api/classes/:id",
    "title": "Update a class",
    "group": "Classes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "start",
            "description": "<p>Class start time</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "end",
            "description": "<p>Class end time</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "length",
            "defaultValue": "1",
            "description": "<p>Duration of the class in hours</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "finished",
            "defaultValue": "0",
            "description": "<p>If the class is finished or not</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "schedule_id",
            "description": "<p>Which schedule does this class belong to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The updated class</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/classes.js",
    "groupTitle": "Classes",
    "name": "PostApiClassesId"
  },
  {
    "type": "put",
    "url": "/api/classes",
    "title": "Create a class",
    "group": "Classes",
    "description": "<p>The property &quot;finished&quot; is set to false by default</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "start",
            "description": "<p>Class start time</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "end",
            "description": "<p>Class end time</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "length",
            "defaultValue": "1",
            "description": "<p>Duration of the class in hours</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "finished",
            "defaultValue": "0",
            "description": "<p>If the class is finished or not</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "schedule_id",
            "description": "<p>Which schedule does this class belong to</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created class</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/classes.js",
    "groupTitle": "Classes",
    "name": "PutApiClasses"
  },
  {
    "type": "delete",
    "url": "/api/comments/:id",
    "title": "Delete a comment",
    "group": "Comments",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>void</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/comments.js",
    "groupTitle": "Comments",
    "name": "DeleteApiCommentsId"
  },
  {
    "type": "get",
    "url": "/api/comments/",
    "title": "Get all comments",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>Filtered by creator's user ID</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "post_id",
            "description": "<p>Filtered by post's ID it belongs to</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all comments</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/comments.js",
    "groupTitle": "Comments",
    "name": "GetApiComments"
  },
  {
    "type": "put",
    "url": "/api/comments/",
    "title": "Create a comment",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The creator's user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "post_id",
            "description": "<p>The post ID it belongs to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>The content of the comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created comment</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/comments.js",
    "groupTitle": "Comments",
    "name": "PutApiComments"
  },
  {
    "type": "delete",
    "url": "/api/courses/:id",
    "title": "Delete a course",
    "group": "Courses",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>void</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/courses.js",
    "groupTitle": "Courses",
    "name": "DeleteApiCoursesId"
  },
  {
    "type": "get",
    "url": "/api/courses",
    "title": "Get all courses",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "id",
            "description": "<p>Filtered by the major ID</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>Filtered by the creator's user ID</p>"
          },
          {
            "group": "Query String",
            "type": "string",
            "optional": true,
            "field": "label",
            "description": "<p>Search by course name</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all courses</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/courses.js",
    "groupTitle": "Courses",
    "name": "GetApiCourses"
  },
  {
    "type": "post",
    "url": "/api/courses/:id",
    "title": "Update a course",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>The course name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The course description</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>The creator's user ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The updated course</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/courses.js",
    "groupTitle": "Courses",
    "name": "PostApiCoursesId"
  },
  {
    "type": "put",
    "url": "/api/courses",
    "title": "Create a course",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>The course name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The course description</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The creator's user ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created course</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/courses.js",
    "groupTitle": "Courses",
    "name": "PutApiCourses"
  },
  {
    "type": "get",
    "url": "/locale/CN/cities.json",
    "title": "Cities list",
    "group": "Locations",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Cities list</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Locations",
    "name": "GetLocaleCnCitiesJson"
  },
  {
    "type": "get",
    "url": "/locale/CN/provinces.json",
    "title": "Provinces list",
    "group": "Locations",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Provinces list</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Locations",
    "name": "GetLocaleCnProvincesJson"
  },
  {
    "type": "get",
    "url": "/locale/countries.json",
    "title": "Countries list",
    "group": "Locations",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Countries list</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Locations",
    "name": "GetLocaleCountriesJson"
  },
  {
    "type": "get",
    "url": "/api/majors/",
    "title": "Get all majors",
    "group": "Majors",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all majors</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/majors.js",
    "groupTitle": "Majors",
    "name": "GetApiMajors"
  },
  {
    "type": "put",
    "url": "/api/majors/",
    "title": "Create a major",
    "group": "Majors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "label",
            "description": "<p>The major name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The major description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created major</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/majors.js",
    "groupTitle": "Majors",
    "name": "PutApiMajors"
  },
  {
    "type": "get",
    "url": "/api/messages",
    "title": "Get all messages",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "sender_id",
            "description": "<p>Filtered by the sender's user ID</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "recipient_id",
            "description": "<p>Filtered by the recipient's user ID</p>"
          },
          {
            "group": "Query String",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "read",
            "defaultValue": "0,1",
            "description": "<p>Filtered by if the message is read</p>"
          },
          {
            "group": "Query String",
            "type": "string",
            "optional": true,
            "field": "content",
            "description": "<p>Search by message content</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all messages</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/messages.js",
    "groupTitle": "Messages",
    "name": "GetApiMessages"
  },
  {
    "type": "put",
    "url": "/api/messages",
    "title": "Create a new message",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Message content</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "sender_id",
            "description": "<p>The sender's user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "recipient_id",
            "description": "<p>The recipient's user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "read",
            "defaultValue": "0",
            "description": "<p>If the message has been read or not</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The newly created message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/messages.js",
    "groupTitle": "Messages",
    "name": "PutApiMessages"
  },
  {
    "type": "delete",
    "url": "/api/orders/:id",
    "title": "Delete a order",
    "group": "Orders",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>void</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders",
    "name": "DeleteApiOrdersId"
  },
  {
    "type": "get",
    "url": "/api/orders/",
    "title": "Get all orders",
    "group": "Orders",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "buyer_id",
            "description": "<p>Filtered by the buyer's user ID</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "seller_id",
            "description": "<p>Filtered by the seller's user ID</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all orders</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders",
    "name": "GetApiOrders"
  },
  {
    "type": "post",
    "url": "/api/orders/",
    "title": "Update a order",
    "group": "Orders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "payment_method",
            "description": "<p>ID of the payment method</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "total_price",
            "description": "<p>Total price of all the classes = require(this order</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "unit_price",
            "description": "<p>Unit price of the each class = require(this order</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "length",
            "description": "<p>Length of the schedule a user has bought = require(this order in hours</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "buyer_id",
            "description": "<p>The buyer's user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "seller_id",
            "description": "<p>The seller's user ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The Updated order</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders",
    "name": "PostApiOrders"
  },
  {
    "type": "put",
    "url": "/api/orders/",
    "title": "Create a order",
    "group": "Orders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "payment_method",
            "description": "<p>ID of the payment method</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "total_price",
            "description": "<p>Total price of all the classes = require(this order</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "unit_price",
            "description": "<p>Unit price of the each class = require(this order</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "length",
            "description": "<p>Length of the schedule a user has bought = require(this order in hours</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "buyer_id",
            "description": "<p>The buyer's user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "seller_id",
            "description": "<p>The seller's user ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created order</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders",
    "name": "PutApiOrders"
  },
  {
    "type": "delete",
    "url": "/api/pictures/:id",
    "title": "Delete a picture",
    "group": "Pictures",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>void</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/pictures.js",
    "groupTitle": "Pictures",
    "name": "DeleteApiPicturesId"
  },
  {
    "type": "get",
    "url": "/api/pictures/",
    "title": "Get all pictures",
    "group": "Pictures",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "post_id",
            "description": "<p>Filtered by post's ID it belongs to</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all pictures</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/pictures.js",
    "groupTitle": "Pictures",
    "name": "GetApiPictures"
  },
  {
    "type": "get",
    "url": "/api/pictures/:id",
    "title": "Get a picture",
    "group": "Pictures",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "binary",
            "optional": false,
            "field": "void",
            "description": "<p>The picture</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/pictures.js",
    "groupTitle": "Pictures",
    "name": "GetApiPicturesId"
  },
  {
    "type": "put",
    "url": "/api/pictures/",
    "title": "Create a picture",
    "group": "Pictures",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the image file in base64</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mime",
            "description": "<p>The MIME of the file</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "post_id",
            "description": "<p>It's post ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created picture</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/pictures.js",
    "groupTitle": "Pictures",
    "name": "PutApiPictures"
  },
  {
    "type": "delete",
    "url": "/api/posts/:id",
    "title": "Delete a post",
    "group": "Posts",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>void</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts",
    "name": "DeleteApiPostsId"
  },
  {
    "type": "get",
    "url": "/api/posts",
    "title": "Get all posts",
    "group": "Posts",
    "description": "<p>Posts are ordered by updated time in DESC order by default</p>",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>Filtered by user ID</p>"
          },
          {
            "group": "Query String",
            "type": "string",
            "optional": true,
            "field": "content",
            "description": "<p>Search by posts' content</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all posts</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts",
    "name": "GetApiPosts"
  },
  {
    "type": "get",
    "url": "/api/posts/:id",
    "title": "Get a post",
    "group": "Posts",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>A post object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts",
    "name": "GetApiPostsId"
  },
  {
    "type": "put",
    "url": "/api/posts",
    "title": "Create a post",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>The creator's user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>The post content</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created post</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/posts.js",
    "groupTitle": "Posts",
    "name": "PutApiPosts"
  },
  {
    "type": "get",
    "url": "/api/roles/",
    "title": "Get all roles",
    "description": "<p>0=admin, 1=teacher, 2=student</p>",
    "group": "Roles",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all roles</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/roles.js",
    "groupTitle": "Roles",
    "name": "GetApiRoles"
  },
  {
    "type": "put",
    "url": "/api/roles/",
    "title": "Create a role",
    "description": "<p>0=admin, 1=teacher, 2=student</p>",
    "group": "Roles",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/roles.js",
    "groupTitle": "Roles",
    "name": "PutApiRoles"
  },
  {
    "type": "delete",
    "url": "/api/schedules/:id",
    "title": "Delete a schedule",
    "group": "Schedules",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>void</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/schedules.js",
    "groupTitle": "Schedules",
    "name": "DeleteApiSchedulesId"
  },
  {
    "type": "get",
    "url": "/api/schedules",
    "title": "Get all schedules",
    "group": "Schedules",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "string",
            "optional": true,
            "field": "teacher_id",
            "description": "<p>Filtered by teacher ID</p>"
          },
          {
            "group": "Query String",
            "type": "string",
            "optional": true,
            "field": "student_id",
            "description": "<p>Filtered by student ID</p>"
          },
          {
            "group": "Query String",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "finished",
            "defaultValue": "0,1",
            "description": "<p>Filtered by if the schedule is finished</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all schedules</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/schedules.js",
    "groupTitle": "Schedules",
    "name": "GetApiSchedules"
  },
  {
    "type": "post",
    "url": "/api/schedules/:id",
    "title": "Update a schedule",
    "group": "Schedules",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "label",
            "description": "<p>The schedule name</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>The teacher user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "student_id",
            "description": "<p>The student user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "finished",
            "defaultValue": "0",
            "description": "<p>If the schedule is finished or not</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "quota",
            "defaultValue": "1",
            "description": "<p>The length of the schedule</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The updated schedule</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/schedules.js",
    "groupTitle": "Schedules",
    "name": "PostApiSchedulesId"
  },
  {
    "type": "put",
    "url": "/api/schedules",
    "title": "Create a schedule",
    "group": "Schedules",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "label",
            "description": "<p>The schedule name</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>The teacher user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "student_id",
            "description": "<p>The student user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "finished",
            "defaultValue": "0",
            "description": "<p>If the schedule is finished or not</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "quota",
            "defaultValue": "1",
            "description": "<p>The length of the schedule</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created schedule</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/schedules.js",
    "groupTitle": "Schedules",
    "name": "PutApiSchedules"
  },
  {
    "type": "post",
    "url": "/api/sessions",
    "title": "Sign in",
    "group": "Sessions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>Object containing user object and token</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>Authentication failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/sessions/index.js",
    "groupTitle": "Sessions",
    "name": "PostApiSessions"
  },
  {
    "type": "delete",
    "url": "/api/tags/:id",
    "title": "Delete a tag",
    "group": "Tags",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>void</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tags.js",
    "groupTitle": "Tags",
    "name": "DeleteApiTagsId"
  },
  {
    "type": "get",
    "url": "/api/tags/",
    "title": "Get all tags",
    "group": "Tags",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all tags</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tags.js",
    "groupTitle": "Tags",
    "name": "GetApiTags"
  },
  {
    "type": "post",
    "url": "/api/tags/",
    "title": "Update a tag",
    "group": "Tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the tag</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The Updated tag</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tags.js",
    "groupTitle": "Tags",
    "name": "PostApiTags"
  },
  {
    "type": "put",
    "url": "/api/tags/",
    "title": "Create a tag",
    "group": "Tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the tag</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The creator's user ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The created tag</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "401",
            "description": "<p>Protected resource, use Authorization header to get access</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/tags.js",
    "groupTitle": "Tags",
    "name": "PutApiTags"
  },
  {
    "type": "delete",
    "url": "/api/users/:id",
    "title": "Delete a user",
    "group": "Users",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "void",
            "optional": false,
            "field": "void",
            "description": "<p>void</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/index.js",
    "groupTitle": "Users",
    "name": "DeleteApiUsersId"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Get all users",
    "group": "Users",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "string",
            "optional": true,
            "field": "id",
            "description": "<p>Filtered by user ID</p>"
          },
          {
            "group": "Query String",
            "type": "string",
            "optional": true,
            "field": "mobilephone",
            "description": "<p>Filtered by user mobilephone</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": true,
            "field": "role_id",
            "defaultValue": "2,3",
            "description": "<p>Filtered by user's role, 1=admin, 2=teacher, 3=student</p>"
          },
          {
            "group": "Query String",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "gender",
            "defaultValue": "0,1",
            "description": "<p>Filtered by user gender</p>"
          },
          {
            "group": "Query String",
            "type": "string",
            "allowedValues": [
              "online",
              "offline",
              "both"
            ],
            "optional": true,
            "field": "place",
            "defaultValue": "both",
            "description": "<p>Filtered by the place to have the class</p>"
          },
          {
            "group": "Query String",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>Filtered by the city a user is living in, check &quot;Cities list&quot;</p>"
          },
          {
            "group": "Query String",
            "type": "string",
            "optional": true,
            "field": "province",
            "description": "<p>Filtered by the province a user is living in, check &quot;Provinces list&quot;</p>"
          },
          {
            "group": "Query String",
            "type": "string",
            "optional": true,
            "field": "countries",
            "description": "<p>Filtered by the country a user is living in, check &quot;Countries list&quot;</p>"
          },
          {
            "group": "Query String",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "active",
            "defaultValue": "0,1",
            "description": "<p>Filtered by if a user wished to be found</p>"
          },
          {
            "group": "Query String",
            "type": "string",
            "allowedValues": [
              "DESC",
              "ASC"
            ],
            "optional": true,
            "field": "cost",
            "description": "<p>Sorting by cost</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-example:",
          "content": "/api/users?id=1&gender=1,0&place=online&role_id=1&city=4503,1101",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains all users</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/index.js",
    "groupTitle": "Users",
    "name": "GetApiUsers"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Get a user",
    "group": "Users",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>User object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/index.js",
    "groupTitle": "Users",
    "name": "GetApiUsersId"
  },
  {
    "type": "get",
    "url": "/api/users/:id/followers",
    "title": "Get a user's followers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains a user's followers</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/index.js",
    "groupTitle": "Users",
    "name": "GetApiUsersIdFollowers"
  },
  {
    "type": "get",
    "url": "/api/users/:id/followings",
    "title": "Get a user's followings",
    "group": "Users",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains a user's followings</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/index.js",
    "groupTitle": "Users",
    "name": "GetApiUsersIdFollowings"
  },
  {
    "type": "get",
    "url": "/api/users/:id/students",
    "title": "Get a user's students",
    "group": "Users",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "finished",
            "defaultValue": "0,1",
            "description": "<p>Filtered by if the schedule has been finished</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains a user's students</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/index.js",
    "groupTitle": "Users",
    "name": "GetApiUsersIdStudents"
  },
  {
    "type": "get",
    "url": "/api/users/:id/teachers",
    "title": "Get a user's teachers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "finished",
            "defaultValue": "0,1",
            "description": "<p>Filtered by if the schedule has been finished</p>"
          },
          {
            "group": "Query String",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object[]",
            "optional": false,
            "field": "void",
            "description": "<p>Array contains a user's teachers</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/index.js",
    "groupTitle": "Users",
    "name": "GetApiUsersIdTeachers"
  },
  {
    "type": "post",
    "url": "/api/users/:id",
    "title": "Update a user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "defaultValue": "UUIDV1",
            "description": "<p>The unique username</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": true,
            "field": "role_id",
            "defaultValue": "3",
            "description": "<p>User's role, 1=admin, 2=teacher, 3=student</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobilephone",
            "description": "<p>User unique mobilephone number</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User unique email address</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>User name for display purpose only</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "school",
            "description": "<p>The school name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>The title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bio",
            "description": "<p>The biography of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "online",
              "offline",
              "both"
            ],
            "optional": true,
            "field": "place",
            "defaultValue": "both",
            "description": "<p>Where the user wish to have the class</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>The code of country where the user lives in, check countries list</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "province",
            "description": "<p>The code of province where the user lives in, check provinces list</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>The code of city where the user lives in, check cities list</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>If user can be seached or not</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "gender",
            "description": "<p>User gender</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "cost",
            "defaultValue": "0",
            "description": "<p>The cost per hour of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "available",
            "defaultValue": "0",
            "description": "<p>How much hours a user is opened for booking</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The updated user object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/index.js",
    "groupTitle": "Users",
    "name": "PostApiUsersId"
  },
  {
    "type": "put",
    "url": "/api/users",
    "title": "Create a new user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "defaultValue": "UUIDV1",
            "description": "<p>The unique username</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": true,
            "field": "role_id",
            "defaultValue": "3",
            "description": "<p>User's role, 1=admin, 2=teacher, 3=student</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobilephone",
            "description": "<p>User unique mobilephone number</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User unique email address</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>User name for display purpose only</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "school",
            "description": "<p>The school name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>The title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bio",
            "description": "<p>The biography of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "online",
              "offline",
              "both"
            ],
            "optional": true,
            "field": "place",
            "defaultValue": "both",
            "description": "<p>Where the user wish to have the class</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>The code of country where the user lives in, check countries list</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "province",
            "description": "<p>The code of province where the user lives in, check provinces list</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>The code of city where the user lives in, check cities list</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>If user can be seached or not</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "gender",
            "description": "<p>User gender</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "cost",
            "defaultValue": "0",
            "description": "<p>The cost per hour of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "available",
            "defaultValue": "0",
            "description": "<p>How much hours a user is opened for booking</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "void",
            "description": "<p>The newly created user object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users/index.js",
    "groupTitle": "Users",
    "name": "PutApiUsers"
  }
] });
