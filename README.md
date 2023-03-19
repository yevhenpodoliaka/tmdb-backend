# tmdb-backend
-----------------------------------------------------------------
BASE_URL:`https://tmdb-backend.onrender.com`
-----------------------------
## AUTH  :lock:
----------------------------------------------------------------------
`Authorization header: Bearer token(token)`
----------------------------------------------------------------------
### register :pencil2::pencil2::pencil2:
--------------------------------------------------------------------
`/api/auth/register`
-----------------------------------------------------------
* method:POST
* body: 
    ``` js
        {
        name:"userName",*
        email:"user@gmail.com",*
        password:password*
        } 
* response :   
  ``` js  
    {
        name: string,
        email: string,
        token: string,
        movies: [],
 
    }
  ```
-------------------------------------  
### login  :key::key::key:
--------------------------------------------------------
`/api/auth/login`
-------------------------------------------------------
* method:POST
* body:
``` js 
      {
         email:"user@gmail.com",
         password:******
       }
```

* response :
``` js 
       {
      name: string,
      email: string,
    token: string,
    movies: movie[],
 
  }
   
```
----------------------------------------------
### logout :x:
---------------------------------------------------
`/api/auth/logout`
--------------------------------------------------
* method:GET
* response : status(204)
---------------------------------------------------
## USER :smiley_cat:
-------------------------------------------------------
### current User :smiley_cat:
----------------------------------------------------------
`/api/auth/current`
-------------------------------------------------
* method:GET
* response : 
``` js 
    user: {
        name,
        email,
        movies:[],
 
  }
```
----------------------------
## MOVIES
-----------------------------------------------------
### add :pencil2:
---------------------------------------------------
`/api/movies`
------------------------------------------------
* method:POST
* body:
``` js 
   { movieId:string*,
     group:"watched"|"favorites"|"queued",*
    }
    
```

* response :
``` js 
     {
     movies:movie[]
      }
  
 ```
    
---------------------------------------
### delete movie :wastebasket:
-----------------------------------------
`/api/movies/:_id`
------------------------------------------
* method:DELETE
* response:
``` js
  {
  
    message: "movie deleted",
    movies:movie[]
  }
```
---------------------------------------
### update movie :pencil2:
----------------------------------------
`/api/movies/:_id`
-------------------------------------------
* method:PATCH
* body:
``` js
  { group:newGroup*} ("watched"|"favorites"|"queued",*)
 

```
* response: 
``` js
 {
    message:"movie updated",
  movies:movie[]
  }
```
------------------------------------------
### get all  :clipboard:
------------------------------------------------
`/api/movies`  [All users movies]
--------------------------

* method:GET
* response :
``` js
  {

      movies: movie[],
      
    }
```
---------------------------------------------------------------
 #### Example movie in response
 ---------------------------------------------------------------
 ``` js
    {                 
     movieID:string,
     group:"watched"|"favorites"|"queued",
    _id:string,
    }
        
```
---------------------------------------------------------------
