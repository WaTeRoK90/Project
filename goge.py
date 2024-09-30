num=int(input())
sum=0
for i in range(num):
    a=int(input())
    if a % 6 == 0:
        sum +=a
print(sum)