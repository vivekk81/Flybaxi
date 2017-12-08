from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from login import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    url(r'^login/$', views.registereduser,name='registereduser'),
    url(r'^$', views.homepage,name='homepage'),
    url(r'^home/$', views.homepage,name='homepage'),
    url(r'^upload/$',views.uploadimage),
    url(r'^getbikes/$',views.getbikes),
    #url(r'^getselectedbike/$',views.getselectedbike),
    url(r'^submitimage/$',views.submitimage,name='submitimage'),
    #url(r'^single/$', views.homepage,name='homepage'),
    url(r'^mybike/$',views.mybike,name='mybike'),
    url(r'^getselectedbike/(?P<bikeid>[0-9]+)/$',views.getselectedbike,name='getselectedbike'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
urlpatterns += staticfiles_urlpatterns()

