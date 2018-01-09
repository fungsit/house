"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var sqlite_database_service_1 = require("./database/sqlite-database.service");
var state_service_1 = require("./state/state.service");
exports.PUZZLE_PROVIDERS = [
    sqlite_database_service_1.SqliteDatabaseService,
    state_service_1.StateService
];
__export(require("./database/sqlite-database.service"));
__export(require("./state/state.service"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsOEVBQTJFO0FBQzNFLHVEQUFxRDtBQUV4QyxRQUFBLGdCQUFnQixHQUFVO0lBQ3JDLCtDQUFxQjtJQUNyQiw0QkFBWTtDQUNiLENBQUM7QUFHRix3REFBbUQ7QUFFbkQsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3FsaXRlRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhYmFzZS9zcWxpdGUtZGF0YWJhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3N0YXRlL3N0YXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgUFVaWkxFX1BST1ZJREVSUzogYW55W10gPSBbXG4gIFNxbGl0ZURhdGFiYXNlU2VydmljZSxcbiAgU3RhdGVTZXJ2aWNlXG5dO1xuXG5leHBvcnQgKiBmcm9tICcuL2RhdGFiYXNlL2RhdGFiYXNlLXNlcnZpY2UuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YWJhc2Uvc3FsaXRlLWRhdGFiYXNlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0ZS9zdGF0ZS1zZXJ2aWNlLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0YXRlL3N0YXRlLnNlcnZpY2UnO1xuIl19