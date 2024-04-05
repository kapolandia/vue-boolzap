const { createApp } = Vue;

createApp({
    data() {
        return {
          sendMessage: '',
          searchUser: '',
            contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                active: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Fabio',
                avatar: '_2',
                active: false,
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                active: false,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                active: false,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                ],
              },
            ],
        };
    },
    methods: {
      setActiveContact(index) {
        this.contacts.forEach(contact => {
            contact.active = false;
        });

        this.contacts[index].active = true;
        console.log("done");
      },

      sendMessageObj(){
        let textMessage = this.sendMessage;
        let activeContact = this.contacts.filter(contact => contact.active);
        console.log(textMessage);
        activeContact[0]['messages'].push({
          date: new Date().toLocaleString(), 
          message: textMessage,
          status: 'sent'
        });
        this.sendMessage = "";
        setTimeout(this.receiveMessage, 1000);
      },

      receiveMessage(){
        let activeContact = this.contacts.filter(contact => contact.active);
        activeContact[0]['messages'].push({
          date: new Date().toLocaleString(), 
          message: "dai",
          status: 'received'
        });
      },

      isInSearch(name){
        let nameLower = name.toLowerCase();
        let searchLower = this.searchUser.toLowerCase();
        console.log(searchLower);

        if(searchLower.length < 1){
          return false;
        }

        for (let i = 0; i < searchLower.length; i++) {
          if (!nameLower.includes(searchLower[i])) {
              return true;
          }
        }

        return false;
  
      },

      eliminateMessage(index){
        let activeContact = this.contacts.find(contact => contact.active);
        activeContact.messages.splice(index, 1);
      },

      initializeDropdown(event) {
        let icon = event.target;
        console.log(icon);
        let dropdownContainer = icon.nextElementSibling;
        console.log(dropdownContainer);
    
        if (dropdownContainer.classList.contains('show')) {
            dropdownContainer.classList.remove('show');
        } else {
            dropdownContainer.classList.toggle('show');
        }
    }
      
    },
    computed: {
      activeContacts() {
        console.log(this.contacts.filter(contact => contact.active));
          return this.contacts.filter(contact => contact.active);
      }
    },
}).mount('#app');
