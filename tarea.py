import string
import sys

# wget -qO- http://norvig.com/ngrams/sowpods.txt | python tarea.py
rep = set(a for x in sys.stdin for (a, b) in zip(x[:-1], x[1:]) if a == b)
u = set(string.ascii_uppercase)
print u-rep
