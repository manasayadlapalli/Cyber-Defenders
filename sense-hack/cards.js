

var scenarios = [
  {
    hackerCard : {
      
      description : "I have obtained your password through a data breach and I am attempting to use it to gain access to other accounts.",

      power : 4,
    },
    playerCards : [
      {
        description : "I use a password manager to generate and store unique, complex passwords for each account I have.",

        power : 5,
      },
      {
        description : "I will change my password immediately and will enable two-factor authentication on all their accounts.",
 
        power : 3,
      },
      {
        description : "I will continue to use the same password for all my accounts and do not take any action to increase their security.",
       
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      
      description : "I established a fraudulent Wi-Fi hotspot with the intention of stealing your email credentials and monitoring your online activity.",
  
      power : 4,
    },
    playerCards : [
      {
        description : "I always avoid connecting to public Wi-Fi networks.",
      
        power : 5,
      },
      {
        description : "While I may use public WiFi to browse the web, I refrain from doing any personal business on a public wifi network.",
    
        power : 3,
      },
      {
        description : "I connect to any available public Wi-Fi network.",
     
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      
      description : "I have sent an email that appears to be from a trusted source, asking you to click on a link and enter your login credentials.",
 
      power : 4,
    },
    playerCards : [
      {
        description : "I will not click on the link and instead go directly to the website to check if there are any important messages or updates.",
      
        power : 5,
      },
      {
        description : "I will hover over the link to see if the URL matches the actual website I am trying to access. If it doesn't, then I delete the email and report it as spam.",
       
        power : 3,
      },
      {
        description : "I will click on the link and enter my login credentials, giving the hacker access to my account.",
       
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent a fraudulent email from your bank requesting for your account information.",
      power : 3,
    },
    playerCards : [
      {
        description : "I verified the email address and found that the message was not sent from my bank.",
        power : 5,
      },
      {
        description : "I refrain from sharing personal information when replying to an email.",
        power : 4,
      },
      {
        description : "I provided the requested details for you to access my account.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      
      description : "I have sent you an email attachment that contains malware.",

      power : 4,
    },
    playerCards : [
      {
        description : "I will not open the attachment and instead runs a virus scan on my computer to check for any existing malware.",
        
        power : 5,
      },
      {
        description : "I open the attachment in a sandboxed environment or a virtual machine to isolate any potential malware.",
        
        power : 3,
      },
      {
        description : "I open the attachment and unknowingly install the malware, which allows the hacker to monitor my activity and steal my data.",
        
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I was able to determine your address based on the personal information you shared on social media.",
      
      power : 3,
    },
    playerCards : [
      {
        description : "I refrain from sharing any personal information on my social media accounts.",
        
        power : 5,
      },
      {
        description : "I set my social media accounts to private, so only people I've approved as friends can view them.",
        
        power : 4,
      },
      {
        description : "I tag everything on my posts so that my friends are aware of my activities.",
        
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I gained unauthorized access to your account after observing you enter your password.",
      
      power : 2,
    },
    playerCards : [
      {
        description : "I make sure to use unique passwords for each of my accounts.",
        
        power : 4,
      },
      {
        description : "I updated the passwords on all of my accounts as I realized they were identical.",
        
        power : 2,
      },
      {
        description : "I removed that account and created a new one.",
        
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I checked your phone's browsing history to see what you do online.",
      
      power : 2,
    },
    playerCards : [
      {
        description : "I make sure to always use a private browser that doesn't record my browsing history.",
        
        power : 4,
      },
      {
        description : "I configured my browser to automatically clear my browsing history upon closing it.",
        
        power : 3,
      },
      {
        description : "I don't like typing in long web addresses, so I keep my browser history to avoid the hassle of typing them again.",
        
        power : 1,
      }
    ]
  }, 

  {
    hackerCard : {
      description : "I successfully infiltrated your system and wiped all your data.",
      
      power : 2,
    },
    playerCards : [
      {
        description : "I adhere to the 3-2-1 backup rule, which means I maintain three copies of my data, including two local backups and one remote backup on cloud storage.",
        
        power : 4,
      },
      {
        description : "My data is stored in both a local and external hard drive for backup.",
        
        power : 3,
      },
      {
        description : "I have not taken any steps to back up my data.",
        
        power : 1,
      }
    ]
  }, 

  {
    hackerCard : {
      description : "I gave you my USB drive to transfer the content.",
     
      power : 2,
    },
    playerCards : [
      {
        description : "I have installed antivirus software and a firewall to safeguard my system against threats.",
        
        power : 4,
      },
      {
        description : "I declined to use your USB as my system did not have antivirus protection and a firewall.",
        
        power : 3,
      },
      {
        description : "I used your USB despite the risk of my system getting corrupted.",
        
        power : 1,
      }
    ]
  }, 
  {
    hackerCard : {
      description : "I plan to target your vulnerable system with ransomware attacks, malware, and data breaches.",
      
      power : 2,
    },
    playerCards : [
      {
        description : "My operating system's Automatic Updates feature is always enabled, so it's unlikely that my system will have any vulnerabilities that can be exploited.",
        
        power : 4,
      },
      {
        description : "I utilize web browsers like Chrome or Firefox that automatically receive frequent security updates.",
        
        power : 3,
      },
      {
        description : "I do not regularly install software updates or security patches.",
        
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I gain access to sensitive information by manipulating your trust, such as by pretending to be a coworker or a friend.",
      //description : "I never use public wifi networks.",
      power : 2,
    },
    playerCards : [
      {
        description : "I verify the identity of any unknown or suspicious individuals before sharing any sensitive information, and I stay wary of any unsolicited requests for personal or financial information",
        //description : "I never use public wifi networks.",
        power : 4,
      },
      {
        description : "I am careful about what personal information is shared online or through social media, and I consider limiting the amount of personal information available online.",
        //description : "I never use public wifi networks.",
        power : 3,
      },
      {
        description : "I share my personal or financial information with unknown or suspicious individuals without verifying their identity, or share too much personal information online.",
        //description : "I never use public wifi networks.",
        power : 1,
      }
    ]
  }

];