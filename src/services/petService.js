import http from "./http-common";

const getAll=()=>{
   const all= localStorage.getItem('pets');
    return JSON.parse(all);

}

const get=(id)=>{
    const all= localStorage.getItem('pets');

    const data=JSON.parse(all)

    const filter=data.filter(item=>item.id ===id);
    
     return filter;
 
 }

const create=(data)=>{
    const pets=localStorage.getItem('pets');

    let petsRegister=[];


    if(pets!==null){
        petsRegister=JSON.parse(pets);

    }

    petsRegister.push(data);

    localStorage.setItem('pets',JSON.stringify(petsRegister));
    return data;
}

const update=data=>{
    return http.post('/pets',data);
}

const petService={
    getAll,
    get,
    create,
    update
};

export default petService;