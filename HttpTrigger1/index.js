module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var service = require('./sqlserverbroker');
    await service.exec_sql(context, "select * from dbo.Transactions");
}