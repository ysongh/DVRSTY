filename = 'dew-error.txt'
file = open(filename, 'r')

errors = []

for line in file:
    line = line.strip()
    line = line.split(' ')
    line[:] = [float(x) for x in line if x != ' ' and x != '']
    for num in line:
        errors.append(num)

def chunkIt(seq, num):
    avg = len(seq) / float(num)
    out = []
    last = 0.0

    while last < len(seq):
        out.append(seq[int(last):int(last + avg)])
        last += avg

    return out

allSensors = chunkIt(errors, 4)
s1 = allSensors[0]
s2 = allSensors[1]
s3 = allSensors[2]
s4 = allSensors[3]

print(s1)
print(' ')
print(s2)
print(' ')
print(s3)
print(' ')
print(s4)

