import book
import user

class Loan(book, user):
    def __init__(self, id, loanDate, returnDate):
        self._id = id
        self._loanDate = loanDate
        self._returnDate = returnDate

    @property
    def id(self):
        return self._id

    @id.setter
    def id(self, value):
        self._id = value

    @property
    def loanDate(self):
        return self._loanDate

    @loanDate.setter
    def loanDate(self, value):
        self._loanDate = value

    @property
    def returnDate(self):
        return self._returnDate

    @returnDate.setter
    def returnDate(self, value):
        self._returnDate = value


    def crearPrestamo():
        pass

    def modificarPrestamo():
        pass

    def mostrarPrestamo():
        pass

    def eliminarPrestamo():
        pass        