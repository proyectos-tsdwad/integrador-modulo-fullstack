import book

class Genero(book):

    def __init__(self, id, typeGenre):
        self._id = id
        self._typeGenre = typeGenre

    @property
    def id(self):
        return self._id

    @id.setter
    def id(self, value):
        self._id = value

    @property
    def typeGenre(self):
        return self._typeGenre

    @typeGenre.setter
    def typeGenre(self, value):
        self._typeGenre = value
    

    def crearGenero(self):
        pass

    def modificarGenero(self):
        pass

    def eliminarGenero(self):
        pass

    def mostrarGeneros(self):
        pass

    def mostrarGenero(self):
        pass