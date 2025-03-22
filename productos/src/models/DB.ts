import mysql, {Pool} from "mysql2/promise"

export const pool:Pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
        password:'12345',
        database:'proyecto'
})

pool 
    .query('Select * from productos')
    .then(()=>console.log('Conected to Mysql'))
    .catch((err)=>{
        console.log('Error conection to MySQL', err)
    })

    //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';