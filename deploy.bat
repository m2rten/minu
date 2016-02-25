SET gitformat="%%h,%%an,%%ar,%%s"
ECHO %gitformat%
git log --pretty=format:%gitformat% > commits.log
git branch > branch.log
python csvtojson.py
