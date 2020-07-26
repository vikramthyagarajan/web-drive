from django_cron import CronJobBase, Schedule
from .models import File

class CleanTxts(CronJobBase):
  RUN_EVERY_MINS = 60 # every hour

  schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
  code = 'src.clean_txts'    # a unique code

  def do(self):
    print('cleaning text files')
    files = File.objects.filter(extension="txt")
    for file in files:
      print('removing file', file.name)
      file.delete()