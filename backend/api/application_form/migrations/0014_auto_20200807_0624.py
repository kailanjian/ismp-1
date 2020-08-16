# Generated by Django 3.0.7 on 2020-08-07 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application_form', '0013_auto_20200623_1523'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicationform',
            name='grade_level',
            field=models.CharField(blank=True, choices=[('high_school', 'High School'), ('undergraduate', 'Undergraduate'), ('exchange', 'Exchange Student'), ('transfer', 'Transfer Student'), ('graduate', 'Graduate Student')], max_length=20),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='major',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='referral',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='school_city',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='school_country',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='applicationform',
            name='school_name',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]