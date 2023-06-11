import re
alvo = '2007-12-31'
novo = '/'
regex = r'-'
print(alvo)
result = re.sub(regex, novo, alvo)
print(result)

