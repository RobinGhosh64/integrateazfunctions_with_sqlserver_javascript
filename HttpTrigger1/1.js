
const mssql = require('mssql')


module.exports={
 
    /*
    *  Execute a sql query
    */
   exec_sql: function (context,sqlstatement) {
       
        console.log("Executing the sql: " + sqlstatement);
        
        const config = {
            user: 'rghosh',
            password: 'Hello123!',
            server: 'rsg-sql-server.database.windows.net', 
            database: 'rsg-sql-db',
            encrypt: true // use this for Azure database encryption
        }
/*
        mssql.connect(config).then(() => {

                return mssql.query(sqlstatement)}).then(result => {
	                console.log(result)
	                return result;
                }).catch(err => {
                    console.log('Some error from query going on...', err)
                })
        mssql.on('error', err=> {
            // ... error handler
            console.log('Some errorgoing on...', err)

        }) */

    
       // var dbConn = new mssql.Connection(config);
    
        mssql.connect(config).then(function () {
        
            //var request = new mssql.Request(dbConn);
        
            mssql.query(sqlstatement).then(function (recordSet) {
                console.log(recordSet);
                context.res = {   body: recordSet }

                
            }).catch(function (err) {
                console.log(err);
                //dbConn.close();
            });

        }).catch(function (err) {
            console.log(err);
        });
    }


};

