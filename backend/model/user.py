import role
import subscription

class User(role, subscription):
    
    def __init__(self, iduser, name, lastName, document, areaCode, telephone, location, province, mail, password):
        self._id = iduser
        self._name = name
        self._lastName = lastName
        self._document = document
        self._areaCode = areaCode
        self._telephone = telephone
        self._location = location
        self._province = province
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
    def areaCode(self):
        return self._areaCode

    @areaCode.setter
    def areaCode(self, value):
        self._areaCode = value   

    @property
    def telephone(self):
        return self._telephone

    @telephone.setter
    def telephone(self, value):
        self._telephone = value

    @property
    def location(self):
        return self._location

    @location.setter
    def location(self, value):
        self._location = value

    @property
    def province(self):
        return self._province

    @province.setter
    def province(self, value):
        self._province = value

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


    def create_user(self):
        pass

    def search_user(self):
        pass

    def edit_user(self):
        pass

    def delete_user(self):
        pass

    def get_user(self):
        pass

    def get_users(self):
        pass

    def validete_login(self):
        pass

    def loan_history(self):
        pass