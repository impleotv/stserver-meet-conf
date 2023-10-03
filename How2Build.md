
## Docker image build

- Production. Uses bundle. 

```
docker build -t stserver-conf . 
```

## Docker hub
To push to docker hub:  

docker login (if needed, use --username=impleo --password= )
Get the id:
```
  docker images 
```
Tag the image: 
```
  docker tag ef4d3873c32b4b245cc170b04152864c4f6143fb18f17f56056387d5e63b809f impleo/stserver-conf:1.0.0

```
Push:
```
  docker push impleo/stserver-conf:1.0.0
```  