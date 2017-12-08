from rest_framework import serializers
from login.models import Bikes


class BikeSerializer(serializers.ModelSerializer):
    bikeimage = serializers.ImageField(
        max_length=None, use_url=True,
    )   
    class Meta:
        model = Bikes
        fields = ('bikeid','bikename', 'bikeimage', 'rentbelow12','rentbelow15','rentmorethan15')
