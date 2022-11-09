import os
import sys

export_directory = sys.argv[1]
export_directory = os.path.join(export_directory, 'reactapp/build/')
os.chdir(export_directory)
print(sys.argv)
