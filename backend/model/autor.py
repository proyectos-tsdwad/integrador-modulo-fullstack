import book

class Autor(book):

    def __init__(self, id, name, last_name):
        self._id = id
        self._name = name
        self._last_name = last_name

    @property
    def id(self):
        return self._id

    @id.setter
    def id(self, value):
        self._id = value

    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value

    @property
    def last_name(self):
        return self._last_name

    @last_name.setter
    def last_name(self, value):
        self._last_name = value
    
    
    def crearAutor(self):
        pass

    def mostrarAutor(self):
        pass

    def mostrarAutores(self):
        pass

    def actualizarAutor(self):
        pass

    def eliminarAutor(self):
        pass
