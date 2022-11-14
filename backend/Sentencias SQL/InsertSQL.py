import mysql.connector

class Conectar():

    def __init__(self) -> None:
        try:
            self.conexion = mysql.connector.connect(
                host = 'localhost',
                port = 3306,
                user = 'root',
                password = 123456,
                db = 'biblioteca-ISPC'

            )
        except mysql.connector.Error as descripcionError:
            print("No se pudo conectar!", descripcionError)

# Insertar Usuario por variable

    def InsertUser(self, document, name, last_name, telephone, mail, student, area_code, province, location, password, role_id):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "INSERT INTO user VALUES( %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                data = (document, name, last_name, telephone, mail, student, area_code, province, location, password, role_id)

                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo conectar a la base de datos!")

# Insertar Libro
    
    def  InsertBook(self, isbn, title, release_year, stock, language, total_pages, synopsis, format):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "INSERT INTO book 'isbn', 'title', 'release_year', 'stock', 'language', 'total_pages', 'synopsis', format'  \
                    VALUES(978-84-450-0512-5, '¿Sueñan los androides con ovejas eléctricas?','1968', 150, 'Español', 272, \
                           'En el año 2021 la guerra mundial ha exterminado a millones de personas. Los supervivientes codician cualquier criatura viva, \
                            y aquellos que no pueden permitirse pagar por ellas se ven obligados a adquirir réplicas increíblemente realistas. \
                            Las empresas fabrican incluso seres humanos. Rick Deckard es un cazarrecompensas cuyo trabajo es encontrar androides rebeldes y retirarlos, \
                            pero la tarea no será tan sencilla cuando tenga que enfrentarse a los nuevos modelos Nexus-6, prácticamente indistinguibles de los seres humanos.'\
                            'paper')"
                cursor.execute(sentenciaSQL)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo conectar a la base de datos!")


# Insertar Autor

    def InsertarAuthor(self, full_name):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL =" INSERT INTO author 'full_name' VALUES('Philip K. Dick')"
                cursor.execute(sentenciaSQL)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo conectar a la base de datos!")


# Insertar Genero

    def InsertGenre(self, name):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "INSERT INTO genre 'name' VALUES('Ciencia Ficcción')"
                cursor.execute(sentenciaSQL)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo conectar a la base de datos!")


# Insertar Editorial

    def InsertPublisher(self, name):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL ="INSERT INTO publisher 'name' VALUES('Austral')"
                cursor.execute(sentenciaSQL)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo conectar a la base de datos!")



    