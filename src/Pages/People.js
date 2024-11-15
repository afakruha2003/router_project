import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const People = () => {

  //const people = [1,2]
  //setDegisken yeni bu fonksiyonun adını değiştirmeyin
  const navigate = useNavigate()
  const [people, setPeople] = useState([])//hook değişken durumunu kontrol eder  


  const getPeople = async () => {
    await fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        setPeople(data.data)//people listesini güncelle ve gelen veriyi kaydet
      }) //todo
      .catch((err) => console.log(err))
  }
  //getPeople() bu fonksiyonu öyle ortalıkta çağırmıyoruz çünkü set methodu kullandığımızda sonsuz döngüye girecektir bunun sebebi de her çağrıldığında kendini ve sayfayı güncellemesidir. Yani useState kullandığın zaman başka bir state yardımıyla fonksiyonu çağırırırz(useEffect)
  //Component Life Cycle
  useEffect(() => {
    getPeople()
  }, [])// bu şekilde sayfa yalnızca ilk kez yüklendiğinde çalışır bir kez çağırılır sayfa güncelleyene kadar


  return (
    <div className='container text-center mt-4'>
      <h1>People List</h1>
      <div className='row justify-content-center'>
        {people.map((person) => {
          const { id, first_name, last_name, avatar } = person
          return (


            <div key={id} className='col-sm-12 col-lg-4 col-md-6'

              // ! absolute path
              // onClick={() => navigate(`/people/${id}` burada ilk başa / koyduğumuz için anasayfaya gidip ordan da people daha sonra da detay sayfasına
              //  onClick={() => navigate(`/people/${id}`, { state: person })} 

              //  ! relative path
              onClick={() => navigate(`${id}` )} //burada burunduğumuz sayfaya otomatik / atıp devam eder

            >
              <img src={avatar} alt="" />
              <h6>{first_name} {last_name}</h6>
            </div>
          )
        })}
      </div>


    </div >
  )
}

export default People;

// ! asunc demek arka planda çalışacak demek ,await demek arka planda çalışacak olan işelemi bekleyeceğim demek yani işlem bitmeden then işlemleri falan yürütme
//*then'den sonra return işlemi yaptım ama return diye belirtmedim çünkü bu bir arroq function ve bunu otomatik olarak sağlıyor


//todo data yazdığımız zaman apideki datadan farklı bir isimle yazabiliyor muyuz??




