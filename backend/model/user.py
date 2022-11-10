import role
import subscription

class User(role, subscription):
    
    def __init__(self, iduser, name, lastName, document, area, telephone, localidad, provincia, mail, password):
        self._id = iduser
        self._name = name
        self._lastName = lastName
        self._document = document
        self._area = area
        self._telephone = telephone
        self._localidad = localidad
        self._provincia = provincia
        self._mail = mail
        self._password = password

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
    def lastName(self):
        return self._lastName

    @lastName.setter
    def lastName(self, value):
        self._lastName = value

    @property
    def document(self):
        return self._document

    @document.setter
    def document(self, value):
        self._document = value

    @property
    def area(self):
        return self._area

    @area.setter
    def area(self, value):
        self._area = value   

    @property
    def telephone(self):
        return self._telephone

    @telephone.setter
    def telephone(self, value):
        self._telephone = value

    @property
    def localidad(self):
        return self._localidad

    @localidad.setter
    def localidad(self, value):
        self._localidad = value

    @property
    def provincia(self):
        return self._provincia

    @provincia.setter
    def provincia(self, value):
        self._provincia = value

    @property
    def mail(self):
        return self._mail

    @mail.setter
    def mail(self, value):
        self._mail = value
    
    @property
    def password(self):
        return self._password

    @password.setter
    def password(self, value):
        self._password = value


    def crearUsuario(self):
        pass

    def buscarUsuario(self):
        pass

    def eliminarUsuario(self):
        pass

    def validarLogin(self):
        pass

    def historialPrestamos(self):
        pass