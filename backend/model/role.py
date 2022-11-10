class Role:

    def __init__(self, id, isUser, isAdmin):
        self._id = id
        self._isUser = isUser
        self._isAdmin = isAdmin

    @property
    def id(self):
        return self._id

    @id.setter
    def id(self, value):
        self._id = value

    @property
    def isUser(self):
        return self._isUser
    
    @isUser.setter
    def isUser(self, value):
        self._isUser = value

    @property
    def isAdmin(self):
        return self._isAdmin

    @isAdmin.setter
    def isAdmin(self, value):
        self._isAdmin = value


    def crearRol(self):
        pass

    def verRoles(self):
        pass
    
    def actualizarRol(self):
        pass

    def eliminarRol(self):
        pass