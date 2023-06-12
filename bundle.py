from os import listdir, getcwd, remove, system, rmdir
from os.path import isfile, join
import shutil

ignoredFiles = ['.git', 'src', 'tsconfig.json', 'bundle', 'jstemp', 'bundle.py', '.gitignore', '.js', 'README.md']
bundleDirectory = getcwd() + '/bundle'
tempJsDirectory = getcwd() + '/jstemp'

def isIgnored(path):
    for ignored in ignoredFiles:
        if path.endswith(ignored):
            return True
    return False

def readFilesWithPath(path):
    files = []
    for f in listdir(path):
        if isIgnored(f):
            continue
        completePath = join(path, f)
        if isfile(completePath):
            files.append(completePath)
        else:
            files.extend(readFilesWithPath(completePath))
    return files
            

def readFiles():
    currentDir = getcwd()
    return readFilesWithPath(currentDir)

def deleteDir(dir):
    files = listdir(dir)
    for f in files:
        path = join(dir, f)
        if not isfile(path):
            deleteDir(path)
            rmdir(path)
        else:
            remove(path)

def clearBundle():
    bundleFiles = listdir(bundleDirectory)
    for f in bundleFiles:
        remove(join(bundleDirectory, f))
    deleteDir(tempJsDirectory)

def moveFilesToBundle(files):
    for f in files:
        shutil.copy(f, bundleDirectory)
    
    system('npx tsc -b')
    system('npx browserify ' + join(tempJsDirectory, 'main.js') + ' -o ' + join(bundleDirectory, 'bundle.js'))


if __name__ == '__main__':
    files = readFiles()
    clearBundle()
    moveFilesToBundle(files)
