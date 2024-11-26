import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDBService {

  private db!: SQLiteDBConnection;
  readonly db_name: string = "usuarios.db";
  readonly db_table: string = "usuario";

  private sqlite: SQLiteConnection;

  private isInitialized: boolean = false;
  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite)
  }

  async initDB(){
    if(this.isInitialized) return;

    try{
      this.db = await this.sqlite.createConnection(
        this.db_name,
        false,
        'no-encryption',
        1,
        false
      );

      await this.db.open();

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ${this.db_table} (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user TEXT NOT NULL,
          password TEXT NOT NULL
        );
      `;

      await this.db.execute(createTableQuery);
      this.isInitialized = true;
      console.log("Base de Datos Inicializada");
    } catch (error) {
      console.error("ERROR :", error);
    }

  }

  async addItem(user: string, password: string){
    try{
      if(!user || !password){
        alert('Por favor, Ingrese todos los campos');
        return
      }
      const insertQuery = `
      INSERT INTO ${this.db_table} (user, password) VALUES (?,?);
      `;

      const values = [user, password];

      await this.db.run(insertQuery, values);
      console.log('Usuario Registrado');

    } catch (error) {
      console.error('Error al agregar al estudiante :', error);
    }
  }

  async getAllUsers(): Promise<any[]> {
    try{
      const SelectQueary = `SELECT * FROM ${this.db_table};`;
      const res = await this.db.query(SelectQueary);
      return res.values? res.values : [];
    } catch (error) {
      console.error("Error al Obtener los usuarios", error);
      return[]
    }
  }

  async deleteUser(id: number){
    try {
      const deletequery = `DELETE FROM ${this.db_table} WHERE id = ?;`;
      await this.db.run(deletequery, [id]);
      console.log("Usuario Eliminado");
    } catch (error) {
      console.error("Error al Eliminar al usuario", error);
    }
  }

}
 