import sql from "mssql";

const dbSettings = {
    user : 'LAPTOP-BD7IVI6N/SA',
    password : '.',
    server : 'localhost',
    database : 'EscenciaNamu',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
}

