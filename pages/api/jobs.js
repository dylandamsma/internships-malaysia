export default (req, res) => {
    res.status(200).json([
        {
          title: 'Senior Printing Intern',
          company: 'Foundingbird Sdn Bhd',
          duration: '3 - 6 months',
          description: 'Foundingbird is looking for a brave soldier who can man the printer, swiftly produce paper copies of digital documents and digitise even the most mundane of documents',
          tags: ['Accounting', 'Paid', '6 months' ]
        },
        {
          title: 'Junior Coffee Ninja',
          company: 'Kaunto Sdn Bhd',
          duration: '3 - 6 months',
          description: 'Foundingbird is looking for a brave soldier who can man the printer, swiftly produce paper copies of digital documents and digitise even the most mundane of documents',
          tags: ['Accounting', 'Paid', '6 months' ]
        },
        {
          title: 'Stamp duty',
          company: 'Bodoh Sdn Bhd',
          duration: '3 - 6 months',
          description: 'Foundingbird is looking for a brave soldier who can man the printer, swiftly produce paper copies of digital documents and digitise even the most mundane of documents',
          tags: ['Accounting', 'Paid', '6 months' ]
        }
    ]);
  };