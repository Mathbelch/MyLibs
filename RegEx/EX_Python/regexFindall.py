import re

regex = re.compile(r'(\d\d)(\w)')
alvo = '11a22b33c'
resultado = re.findall(regex, alvo)
print(resultado)

for grupo in resultado:
   print(grupo)
   print(grupo[0] + grupo[1])