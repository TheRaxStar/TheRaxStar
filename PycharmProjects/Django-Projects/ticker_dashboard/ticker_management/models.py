from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse


class TickerDetails(models.Model):
    ticker_id = models.AutoField(primary_key=True)
    ticker_type = models.CharField(max_length=60)
    # dated_on = models.DateTimeField()
    ticker_json = models.TextField(blank=True)
    ticker_start_time =models.DateTimeField(null=True)
    ticker_end_time =models.DateTimeField(null=True)
    created_for = models.CharField(max_length=300, null=True)
    created_by = models.CharField(max_length=50, blank=True, null=True)
    created_on = models.DateTimeField()
    modified_by = models.CharField(max_length=50, blank=True, null=True)
    modified_on = models.DateTimeField()
    is_active = models.PositiveIntegerField()
    is_deleted = models.PositiveIntegerField()
    deleted_on = models.DateTimeField(blank=True, null=True)
    reason_for_delete = models.CharField(max_length=300, blank=True, null=True)
    # photo = models.ImageField(upload_to="myimage")



class TickerHistory(models.Model):
    history_id = models.AutoField(primary_key=True)
    ticker_id = models.PositiveIntegerField()
    ticker_type = models.CharField(max_length=40)
    ticker_json = models.TextField(blank=True)
    ticker_start_time =models.DateTimeField(null=True)
    ticker_end_time =models.DateTimeField(null=True)
    created_for = models.CharField(max_length=300)
    created_by = models.CharField(max_length=50, blank=True, null=True)
    created_on = models.DateTimeField()
    modified_by = models.CharField(max_length=50, blank=True, null=True)
    modified_on = models.DateTimeField(blank=True, null=True)
    is_active = models.PositiveIntegerField()
    is_deleted = models.PositiveIntegerField()
    deleted_on = models.DateTimeField(blank=True, null=True)
    reason_for_delete = models.CharField(max_length=300, blank=True, null=True)



class PublishedManager(models.Manager):

    def get_queryset(self):
        return super(PublishedManager, self).get_queryset()\
                .filter(status='published')

class Post(models.Model):
    STATUS_CHOICES = (
            ('draft', 'Draft'),
            ('published', 'Published'),
            )
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250, unique_for_date="publish")
    author = models.ForeignKey(User, related_name='blog_posts', on_delete=models.CASCADE)
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="draft")

    objects = models.Manager()
    published = PublishedManager()


