const usersessionId= new Map()


async function setuserSessionID(uuid, user)
{
usersessionId.set(uuid,user)
}


function getuser(uuid)
{
    const user=usersessionId.get(uuid)
    return user
}

module.exports={setuserSessionID,getuser}