## Importing 're' module to be able to work with Regex:
import re

regexp = r'(\d\d)(\w)'
alvo = '11a22b33c'
result = re.search(regexp,alvo)
print(result.group())
print(result.group(1))
print(result.group(2))
print(result.start())
print(result.end())

results = re.finditer(regexp, alvo)
for result in results:
      print("%s | %s | %s [%s,%s]" % (result.group(), result.group(1),  result.group(2),  result.start(), result.end()))