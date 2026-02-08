import React from 'react'

const AsciiHeader = () => {
    const ascii = String.raw` ____                                _   _     
|  _ \ __ _ _ __ _ __ ___   ___  ___| |_( )___ 
| |_) / _' | '__| '_   _ \ / _ \/ _ \ __|// __|
|  __/ (_| | |  | | | | | |  __/  __/ |_  \__ \
|_|__ \__,_|_|  |_| |_| |_|\___|\___|\__| |___/
|  _ \ ___  _ __| |_ / _| ___ | (_) ___        
| |_) / _ \| '__| __| |_ / _ \| | |/ _ \       
|  __/ (_) | |  | |_|  _| (_) | | | (_) |      
|_|   \___/|_|   \__|_|  \___/|_|_|\___/       
`;
    return (
    <pre className='text-green-400 font-mono text-sm mb-2'>
        {ascii}
    </pre>
    )
}

export default AsciiHeader