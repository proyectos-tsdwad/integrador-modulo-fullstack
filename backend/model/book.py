class Libro:
    def __init__(self, title, autor, img,  description, publisher, isbn, pageAmount, language, genre, releaseDate, format, score, stock):
        self._title = title
        self._autor = autor
        self._img = img
        self._description = description
        self._publisher = publisher
        self._isbn = isbn
        self._pageAmount = pageAmount
        self._language = language
        self._genre = genre
        self._releaseDate = releaseDate
        self._format = format
        self._score = score
        self._stock = stock

    @property
    def title(self):
        return self._title

    @title.setter
    def title(self, value):
        self._title = value

    @property
    def autor(self):
        return self._autor

    @autor.setter
    def autor(self, value):
        self._autor = value

    @property
    def img(self):
        return self._img

    @img.setter
    def img(self, value):
        self._img = value

    @property
    def description(self):
        return self._description

    @description.setter
    def description(self, value):
        self._description = value

    @property
    def publisher(self):
        return self._publisher

    @publisher.setter
    def publisher(self, value):
        self._publisher = value

    @property
    def isbn(self):
        return self._isbn

    @isbn.setter
    def isbn(self, value):
        self._isbn = value

    @property
    def pageAmount(self):
        return self._pageAmount

    @pageAmount.setter
    def pageAmount(self, value):
        self._pageAmount = value

    @property
    def language(self):
        return self._language

    @language.setter
    def language(self, value):
        self._language = value

    @property
    def genre(self):
        return self._genre

    @genre.setter
    def genre(self, value):
        self._genre = value

    @property
    def releaseDate(self):
        return self._releaseDate

    @releaseDate.setter
    def releaseDate(self, value):
        self._releaseDate = value

    @property
    def format(self):
        return self._format

    @format.setter
    def format(self, value):
        self._format = value

    @property
    def score(self):
        return self._score

    @score.setter
    def score(self, value):
        self._score = value

    @property
    def stock(self):
        return self._stock

    @stock.setter
    def stock(self, value):
        self._stock = value



    def crearLibro():
        pass

    def mostrarLibroPorId():
        pass

    def mostrarLibros():
        pass

    def actualizarLibros():
        pass

    def eliminarLibros():
        pass

    def buscarLibroPorNombre():
        pass

    def mostrarDisponibilidadLibro():
        pass
