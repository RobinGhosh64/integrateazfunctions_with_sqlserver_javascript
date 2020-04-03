
const mssql = require('mssql')

module.exports={
 
    /*
    *  Execute a sql query
    */
   exec_sql: async function  (context,sqlstatement) {
       
        console.log("Executing the sql: " + sqlstatement);
        
        const config = {
            user: 'yours',
            password: 'yours',
            server: 'yours-sql-server.database.windows.net', 
            database: 'yours-sql-db',
            encrypt: true // use this for Azure database encryption
        }

        try {
            await mssql.connect(config)
            const result = await mssql.query`select * from dbo.Transactions`
            context.res = { body: result}
        }
        catch (error) {
            console.log(error) 
            context.res = { body: error, status: 500}
        }   
       
    }


};

