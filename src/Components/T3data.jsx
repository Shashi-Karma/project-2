import { faker } from '@faker-js/faker'
const T3data = [
    {
        
        AC_Name:faker.address.city(),
        Total_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
        Mapped_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
        Unmapped_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
    },

    {
        
        AC_Name:faker.address.city(),
        Total_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
        Mapped_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
        Unmapped_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
    },

    {
       
        AC_Name:faker.address.city(),
        Total_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
        Mapped_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
        Unmapped_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
        
    },

    {
       
        AC_Name:faker.address.city(),
        Total_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
        Mapped_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
        Unmapped_Booth:faker.random.numeric(3, { allowLeadingZeros: true }),
        
    }
]


export default T3data;