class Subscription:
    def __init__(self, id, dueDate):
        self._id = id
        self._dueDAte = dueDate


    @property
    def id(self):
        return self._id

    @id.setter
    def id(self, value):
        self._id = value

    @property
    def dueDate(self):
        return self._id

    @dueDate.setter
    def dueDate(self, value):
        self._dueDate = value



    def create_subscription():
        pass

    def edit_subscription():
        pass

    def get_subscription():
        pass

    def get_subscriptions():
        pass

    def delete_subscription():
        pass        