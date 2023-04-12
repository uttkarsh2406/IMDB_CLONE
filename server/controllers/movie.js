const {connection}=require("./../server")

exports.allMovie=(req, res) => {
    connection.execute(" select *from movie", function (err, result, fields) {
      if (!err) {
        return res.json(result);
      }
      res.send(err);
    });
  }

  exports.createMovie=(req,res)=>{
    const {values}=req.body;
    console.log(values.title);
    connection.execute(`Insert INTO movie (name,yor,plot,poster_id,poster) values ('${values.title}',${values.yor},'${values.plot}','${values.images[0].public_id}','${values.images[0].url}')`,function(err,result,fields){
      if (!err) {
        return res.json(result);
      }
      console.log(err);
      res.send(err);
    })
  }