var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome in servr Anis ${client.user.tag}!`);
});
var prefix = '-'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "460389855382470662") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});
const moment = require('moment')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', function(){
    var ms = 100000 ;
    var setGame = [`[ -help ]`];   
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);100000

});
client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
		 ━━━┳╮╱╱╱╱╱╱╱ ╭━━╮╱╱╱╱╭╮
         ┃╭━╮┃┃╱╱╱╱╱╱╱ ┃╭╮┃╱╱╱╭╯╰╮
         ┃╰━╯┃┃╭╮╭┳━━╮ ┃╰╯╰┳━━╋╮╭╯
         ┃╭━━┫┃┃┃┃┃━━┫ ┃╭━╮┃╭╮┃┃┃
         ┃┃╱╱┃╰┫╰╯┣━━┃ ┃╰━╯┃╰╯┃┃╰╮
╰        ╯╱╱╰━┻━━┻━━╯ ╰━━━┻━━╯╰━╯
        
		 ------------------------------
		 -🚀 سرعه اتصال ممتازه
         -😎 سهل الاستخدام 
         -⚠ صيانه كل يوم
         -💵 مجاني بل كامل 
         -📚 البوت عربي و سيتم اضافه اللغه النكليزية
		     ¤ [Aռɨֆ_ʍǟʟʊʍʏǟτ|ɢǟʍϵrツ  #0976البوت خاص ب] ¤
         ------------------------------
		      💎『اوامر عامة』💎
         -id : 『عرض ملفك الشخصي』
         -ask : 『البوت يسئلك اسئلة』
         -server : 『معلومات عن السيرفر』
		 -ping 『لمعرفه سرعه البوت』
		 -servers 『علشان تشوف البوت بكم سيرفر اون لاين 』
		 -bot/ معلومات عن البوت』
		 -avatar/ يعرض صورتك او صوره شخص』
		 -support/ سيرفر الدعم القني و المساعده』
		 -roll <number> ➾ role
		 -draw / يكرر الكلام في صوره』
		 -calculate / حاسبة』
         ------------------------------
		    👑『اوامر ادارية』👑
         -ban : 『لتعطي شخص باند』
         -kick : 『لتعطي شخص كيك』
         -clear : 『لمسح الشات برقم』
         -createroles : 『عمل رتب متكاملة للسيرفر』
         -voicesetup : 『انشاء روم فويس اونلاين
         لكتابة الكلام الذي في الروم اكتب voicesetup الكلام و 0 』
		 -color 50 /انشاء 50 لون』
		 -mute < mention > ➾ اسكات عضو
		 -unmute <mention> ➾ فك الاسكات من العضو
		 -bc  『خيارات البرودكاست』
          ----------------------
         -guilds : عدد سيرفر البوت
         -inv : دعوه البوت الى سيرفر (غير ماتحة)
         -help : عرض هذه الرسالة
         ------------------------------
		       ***Games Commands***
		 -يخيرك بين شي وشي / لو خيروك』
		 -لعبه صراحه/صراحه』
		 -xo  لعبة اكس او
		      // Commands Here
         let cmds = {
         profile: { cmd: 'بروفايل', a: ['بروفايلي'] },
         setinfo: { cmd: 'معلوماتي', a: ['معلوماتي تعديل'] },
         rep: { cmd: 'لايك', a: ['اعجاب'] },
         credits: { cmd: 'فلوسي', a: ['رصيدي'] },
         daily: { cmd: 'هدية', a: ['هديه'] },
         transfer: { cmd: 'تحويل' },
         add: { cmd: 'فلوس' },
         buy: { cmd: 'شراء' },
         set: { cmd: 'خلفية', a: ['خلفيه'] },
         preview: { cmd: 'تجربة', a: ['تجربه'] },
         mywalls: { cmd: 'خلفياتي' }
}
		 
                                                **
         
       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
	  message.react("📩")
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var prefix = "-"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
 
client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
client.on('message', message => {
if (message.content.startsWith("kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};
});
client.on('message', message => {
if (message.content.startsWith("ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});

client.on('message', message => {
	var prefix = "-";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
if (message.content.startsWith(prefix+"ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});
client.on('message', message => {
if (message.content.startsWith(prefix+"cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
          
        }
});
client.on('message', message => {
  if (true) {
if (message.content === '-inv') {
      message.author.send('اسف غير متاحة ').catch(e => console.log(e.stack));

    }
   } 
  });


client.on('message', message => {
     if (message.content === "-inv") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" اسف هذا الأمر غير متاح او ممنوع")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.content == "-ask") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
		var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})

client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   } 
});
//========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "users")) {
       message.channel.send(`Users: \`\`${client.users.size}\`\``);
   } 
});
//=========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "channels")) {
       message.channel.send(`channels: \`\`${client.channels.size}\`\``);
   } 
});
client.on('message', message => {
    if (message.content === "-createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Qween", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "HighNiss", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Pros", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Actve", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});


      client.on('message', async message => {
  if(message.content.startsWith(prefix + "voicesetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'щéļḉσᶆé');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});          
         
    



const w = ['./img/w1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to ${member.guild.name}`, 300, 130);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                
                             
welcomer.sendFile(canvas.toBuffer())



      
      
                    }  )  
      
                    

})
      });                    
 }
});
client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'щéļḉσᶆé')
    if (!channel) return;
    channel.send({embed : embed});
    })
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","☠ᶆéᶆ฿éɹ☠⚓")); //اسم الرتبة
    });
	

client.on('message', message => {
             if (!message.channel.guild) return;
      if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  
  if (command === 'invites') {
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    return message.reply(`**${inviteCount}: عدد الاشخاص الذي دعوتهم هو**`)

});
}});   
 
        const arraySort = require('array-sort'), 
          table = require('table');

client.on('message' , async (message) => {

 if(message.content.split(' ')[0].toLowerCase() == prefix + 'top') {
                 if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');

  var invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
            
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
    
     
    })
    
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});


client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });
					
					client.on('message', message => {
     if (message.content === "-servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**| السيرفرات |**" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});

client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  (prefix + "color 50")) {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('جاري عمل الالوان |✅')
        }else{
            message.channel.send('ما معاك البرمشن المطلوب  |❌')
            }
    }
});

/*لو خيروك*/
  
var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});

/*معلونات البوت*/
 
 client.on('message', message => {
     if (message.content === (prefix + "bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** :white_check_mark: Servers: **" , client.guilds.size)
  .addField("** :white_check_mark: Users: **" , client.users.size)
  .addField("** :white_check_mark: Channels: **" , client.channels.size)
    .addField("** :rocket: Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});

/*افتار*/

client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

/*سورت*/

client.on('message', message => {
  if (true) {
if (message.content === (prefix + "support")) {
     message.author.send('https://discord.gg/hXjGee').catch(e => console.log(e.stack));
    }
   } 
  });
  
client.on('message', message => {
     if (message.content === (prefix + "support")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")



  message.channel.sendEmbed(embed);
    }
});

/*MUTE CHANNEL*/

client.on('message', message => {

    if (message.content === "+mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === "+unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }  



});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'calculate')) {
    let args = msg.content.split(" ").slice(1);
	    const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
	const embed = new Discord.RichEmbed()
	.addField("**Input**: ",`**${question}**`, true)
	.addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
	}
};
});

/*صراحة*/

const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith(prefix + "صراحة")) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});

client.on('message', msg => { if (msg.content === 'هلا') { msg.reply('**هــلا والله  **'); } });

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {//حقوق دايموند كودز
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
	client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('gmail')){
        message.delete()
    return message.reply(`** لايمكنك نشر الجيمل  هنا **`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('snapchat')){
        message.delete()
    return message.reply(`** لايمكنك نشر سناب شات  هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('instagram')){
        message.delete()
    return message.reply(`** لايمكنك نشر الانستقرام هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('twitter')){
        message.delete()
    return message.reply(`** لايمكنك  نشر التويتر هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('facebook')){
        message.delete()
    return message.reply(`** لايمكنك نشر الفيس بوك هنا **`)
    }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube')){
        message.delete()
    return message.reply(`** لايمكنك نشر اروابط في هذا السرفر **`)
    }

});

client.on('message' , message => {

                if (message.author.bot) return;
                if (message.content.startsWith(prefix + "contact")) {
                if (!message.channel.guild) return;



                let args = message.content.split(" ").slice(1).join(" ");



                client.users.get("484326398568300555").send(
                    "\n" + "**" + "● السيرفر :" + "**" +
                    "\n" + "**" + "» " + message.guild.name + "**" +
                    "\n" + "**" + " ● المرسل : " + "**" +
                    "\n" + "**" + "» " + message.author.id + "**" +
                    "\n" + "**" + " ● الرسالة : " + "**" +
                    "\n" + "**" + args + "**")

                let embed = new Discord.RichEmbed()
                     .setAuthor(message.author.username, message.author.avatarURL)
                     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
                     .setThumbnail(message.author.avatarURL)
                                                                

                message.channel.send(embed);


                }
                    
                });
				
				client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle("رسالة مباشرة إلى بوت")
                                .addField(`أرسلت بواسطة:`, `<@${message.author.id}>`)
                                .setColor("RANDOM")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`رسالة: `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`Anis_hdd ©`)
                            client.users.get("484326398568300555").send(yumz)
                        }
            });
			
			client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {//حقوق دايموند كودز
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle("رسالة مباشرة إلى بوت")
                                .addField(`أرسلت بواسطة:`, `<@${message.author.id}>`)
                                .setColor("RANDOM")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`رسالة: `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`Anis-hdd ©`)
                            client.users.get("484326398568300555").send(yumz)
                        }
            });
			
			const replyForMention = [   "**Hi For More Informations Type ||*-help*||♥**",  ]
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(replyForMention);
    }
});

client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_( ألعب مع نفسك)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('يجب الانتضار حيث ما يتم الموافقه')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`منشن مع من تريد ألعب`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });
 
 client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By :Anis_hdd `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`${prefix}help ||${prefix}تقديم `,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`*** بــوت تــقــديــم __${message.guild.name}__***
			============
			** اوامر تقديم **
			------
			1-${prefix}تقديم 
			============
			اوامر الادارة 
			------
			1-${prefix}قبول @user <rank>
			2-${prefix}رفض @user
			
			||ANIS_hdd ©||`);
            message.channel.sendEmbed(help);
    }
});

client.on("message", message => {
            if(message.content.startsWith("-تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "التقديمات")
            if(!channel) return message.reply("**لانشاء روم التقديمات -room1 من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى  ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **عندك كام سنة 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **هل تتفاعل في الرتبه🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ وما هي الرتبه العوزها 🤔**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم على رتبه** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`هل سيتفاعل ؟`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**`لب علينا قبوله|وماهى الرتبه العوزها؟`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);
 
                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });

        client.on('message', message=>{
            if(message.content.startsWith("-room1")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("التقديمات", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تم انشاء روم التقديمات بنجاح**")
            }
            })
    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  if(message.content.startsWith("-قبول")) {
    let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
    if(!acRoom) return message.reply("-room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');
 
    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
}
});
client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("-رفض")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply("-room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
          client.on('message', message=>{
            if(message.content.startsWith("-room2")) {
         if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("القبول-الرفض", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تم انشاء روم القبول والرفض بنجاح**")
            }
})

Client.on('ready', () => { // When Bot is ready
  console.log(`Bot is launched.`);
})

Client.on('message', async msg => { // When Bot is recived message
  if(msg.author.bot) return; // If Message author is bot dont reply to it .

  SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`).then(res => {

    var s;

    let xp = funcs.generateInt(1, 5); // Generate XP

    if(!res) s = `INSERT INTO profileSystem VALUES ('${msg.author.id}', 200, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info", '{}', '{"wallSrc": "/walls/p2.png"}')`

    if(res) {

      xp = res.xp + xp;

      console.log(xp);

      let level = funcs.getLevelFromExp(xp);
      console.log(level);
      let lvl = res.level;

      if(res.level != level) {
        lvl++;
        msg.channel.send('Level UP!, ' + msg.author + ' just reached level ' + level)
      }

      s = `UPDATE profileSystem SET xp = ${xp}, level = ${lvl} WHERE id = '${msg.author.id}'`

    }

    SQLite.run(s);

  }).catch(err => console.error(err))

    const prefixMention = new RegExp(`^<@!?${Client.user.id}>( |)$`);
    if (msg.content.match(prefixMention)) {
      return msg.reply(`My prefix is \`${prefix}\``);
    }

    if(!msg.content.startsWith(prefix)) return undefined;

    let args = msg.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    let cmd = Client.commands.get(command) || Client.commands.get(Client.aliases.get(command))

    if(msg.content.startsWith(prefix + 'test')) {

      let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)

      if(args[0] == 'delete') {
        SQLite.run(`DELETE * FROM profileSystem`)
        msg.channel.send('Deleted !')
      } else if(args[0] == 'reps') {

        msg.channel.send(`Reps: ${res.rep}`)

      } else {

      msg.channel.send(`XP:${res.xp}, Level:${res.level}`)
      }
    }

    if(cmd == 'فلوسي') {

      let user = msg.mentions.users.first() || msg.author;

      let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${user.id}'`)
      if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 200, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info", "{}", "{wallSrc: '/walls/p2.png'}"`)

      let credits;

      if(!res) credits = 0;
      else credits = res.credits;

      if(!msg.mentions.users.first()) {

      msg.channel.send(`**Your 💳 balance is: **\`$${credits}\``)

    } else {

      if(msg.mentions.users.first().bot) return msg.channel.send('The Bots doesn\'t have credits.')


      msg.channel.send(`**${user.tag} 💳 balance is: **\`$${credits}\``)

      }

  } else if(cmd == 'هدية') {

    let daily = 86400000;
    let amount = funcs.generateInt(100, 300)

    let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)
    if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 200, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info", "{}", "{wallSrc: '/walls/p2.png'}"`)

    let curDaily = res.lastDaily;

    let credits = res.credits;

    if(curDaily != null && daily - (Date.now() - curDaily) > 0) {

      let timeObj = ms(daily - (Date.now() - curDaily));

      msg.channel.send(`You already collected your daily, try again after ${timeObj.hours} Hours, ${timeObj.minutes} Minutes and ${timeObj.seconds} Seconds.`)

    } else {

      msg.channel.send(`You have successfully collected your daily reward: \`${amount}\``);

      SQLite.run(`UPDATE profileSystem SET credits = ${credits + amount}, lastDaily = ${Date.now()} WHERE id = '${msg.author.id}'`);

    }

  } else if(cmd == 'لايك') {

    let rep = 86400000;

    let men = msg.mentions.users.first();

    if(!men) return msg.channel.send('Please mention the user you want to give him rep.');

    if(men.id === msg.author.id) return msg.channel.send('You can\'t give yourself.');

    if(men.bot) return msg.channel.send('You can\'t give bots rep, but you can give me a rep.')

    let resOfMen = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${men.id}'`);
    let resOfAuthor = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)
    if(!resOfMen) SQLite.run(`INSERT INTO profileSystem VALUES ('${men.id}', 200, 0, 0, 0, 0, 0, "Type ${prefix}setinfo to set info", "")`)
    if(!resOfAuthor) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 200, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info", "{}", "{wallSrc: '/walls/p2.png'}"`)

    let curRep = resOfAuthor.lastRep;

    if(curRep != null && rep - (Date.now() - curRep) > 0) {

      let timeObj = ms(rep - (Date.now() - curRep));

      msg.channel.send(`You already gived your reputation point to someone, try again after ${timeObj.hours} Hours, ${timeObj.minutes} Minutes and ${timeObj.seconds} Seconds.`)

    } else {

      msg.channel.send(`You have successfully gived ${men} a reputation point!`)

      SQLite.run(`UPDATE profileSystem SET lastRep = ${Date.now()} WHERE id = '${msg.author.id}'`)
      SQLite.run(`UPDATE profileSystem SET rep = ${resOfMen.rep + 1} WHERE id = '${men.id}'`)

    }

  } else if(cmd == 'تحويل') {

    let men = msg.mentions.users.first();

    if(!men) return msg.channel.send('Please mention the user you want to transfer credits to him.');

    if(men.id === msg.author.id) return msg.channel.send('You can\'t transfer to yourself.');

    if(men.bot && men.id !== Client.user.id) return msg.channel.send('You can\'t transfer credits to bots.')

    let resOfMen = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${men.id}'`);
    let resOfAuthor = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)
    if(!resOfMen) SQLite.run(`INSERT INTO profileSystem VALUES ('${men.id}', 200, 0, 0, 0, 0, 0, "Type ${prefix}setinfo to set info", "")`)
    if(!resOfAuthor) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 200, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info", "{}", "{wallSrc: '/walls/p2.png'}"`)

    let creditsOfMen = resOfMen.credits;
    let creditsOfAuthor = resOfAuthor.credits;

    if(!args[1] || isNaN(args[1])) return msg.channel.send('Please input number of credits to transfer it.');

    if(parseInt(args[1]) > creditsOfAuthor) return msg.channel.send('You don\'t have enough credits to do this.');

    let newAuthorCredits = (creditsOfAuthor - parseInt(args[1]));
    let newMenCredits = (creditsOfMen + parseInt(args[1]));

    SQLite.run(`UPDATE profileSystem SET credits = ${newAuthorCredits} WHERE id = '${msg.author.id}'`);
    SQLite.run(`UPDATE profileSystem SET credits = ${newMenCredits} WHERE id = '${men.id}'`);

    msg.channel.send(`${msg.author} has tranfered \`$${args[1]}\` to ${men}.`)


  } else if(cmd == 'فلوس') {

    if(!ids.includes(msg.author.id)) return;

    let men = msg.mentions.users.first() || msg.author;

    if(men.bot) return msg.channel.send('Bots dosen\'t have credits.');

    let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${men.id}'`);
    if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${men.id}', 200, 0, 0, 0, 0, 0, "Type ${prefix}setinfo to set info", "")`)

    let resu;

    if(men.id === msg.author.id && !msg.mentions.users.first()) resu = args[0];
    else resu = args[1];

    if(!resu || isNaN(resu)) return msg.channel.send('Please input number to add it.');

    SQLite.run(`UPDATE profileSystem SET credits = ${res.credits + parseInt(resu)} WHERE id = '${men.id}'`)

    msg.channel.send('Added!')

  } else if(cmd == 'معلوماتي') {

    let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`);
    if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 200, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info", "{}", "{wallSrc: '/walls/p2.png'}"`)

    if(!args[0]) return msg.channel.send('Please input info to set it.');

    SQLite.run(`UPDATE profileSystem SET info = "${args.join(' ')}" WHERE id = '${msg.author.id}'`)

    msg.channel.send('Your info set to: **' + args.join(' ') + '**')

  } else if(cmd == 'شراء') {

    let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`);
    if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 200, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info", "{}", "{wallSrc: '/walls/p2.png'}"`)

    let hisWalls = res.inventory;

    let wallsShop = config.wallpapers;

    let credits = res.credits;

    if(!args[0] || isNaN(args[0])) return msg.channel.send('Please Select Wallpaper Number.');

    let json = JSON.parse(hisWalls);

    if(!json.walls) json = {
      walls: {}
    };

    if(!wallsShop[args[0]]) return msg.channel.send('There is no wallpaper with this number.')

    if(json.walls[args[0]] == wallsShop[args[0]]) return msg.channel.send('You already bought this wallpaper.');

    if(credits < wallsShop[args[0]].price) return msg.channel.send('You don\'t have enough credits to buy this wallpaper');

    json.walls[args[0]] = wallsShop[args[0]];

    let updatedJson = JSON.stringify(json);

    SQLite.run(`UPDATE profileSystem SET inventory = json('${updatedJson}'), credits = ${credits - wallsShop[args[0]].price} WHERE id = '${msg.author.id}'`)

    msg.channel.send(`You have successfully purchased wallpaper No.${args[0]} With Price: \`$${wallsShop[args[0]].price}\``)

  } else if(cmd == 'خلفية') {

    let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)
    if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 200, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info", "{}", "{wallSrc: '/walls/p2.png'}"`)

    let hisWalls = res.inventory;

    if(!args[0] || isNaN(args[0])) return msg.channel.send('Please Select Wallpaper Number.');

    let json = JSON.parse(hisWalls)

    if(!json.walls[args[0]]) return msg.channel.send('You don\'t have this wallpaper in your inventory.');

    let proData = res.profileData;

    let data = JSON.parse(proData);

    data.wallSrc = json.walls[args[0]].src;

    SQLite.run(`UPDATE profileSystem SET profileData = json('${JSON.stringify(data)}') WHERE id = '${msg.author.id}'`);

    msg.channel.send(`Your profile image has been set.`);

  } else if(cmd == 'تجربة') {

    let wallpapers = config.wallpapers;

    if(!args[0] || isNaN(args[0])) return msg.channel.send('Please Select Wallpaper Number.');

    if(!wallpapers[args[0]]) return msg.channel.send('There is no wallpaper with this number.')

    let Image = Canvas.Image,
    canvas = Canvas.createCanvas(300, 300),
    ctx = canvas.getContext('2d');
fs.readFile(__dirname + `/${wallpapers[args[0]].src}`, function (err, Background) {
  fs.readFile(__dirname + `/walls/p1.png`, function (err, Background) {
  if (err) return console.log(err);
  let BG = Canvas.Image;
  let ground = new Image;
  ground.src = Background;
  ctx.drawImage(ground, 0, 0, 297, 305);
});
  if (err) return console.log(err);
  let BG = Canvas.Image;
  let ground = new Image;
  ground.src = Background;
  ctx.drawImage(ground, 0, 0, 300, 305);
});

  setTimeout(() => {
  msg.channel.send({file:canvas.toBuffer()})
}, 2000)
  } else if(cmd == 'خلفياتي') {

    let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`);

    let data = JSON.parse(res.inventory);

    if(!data.walls) return msg.channel.send('You don\'t have any wallpapers in your inventory');

    let wallsArray = [];

      for (const [key, value] of Object.entries(data.walls)) {
        console.log(`${key} ${JSON.stringify(value)}`);

          wallsArray.push({number: key, s: value.src, p: value.price});

      }

    let embed = new Discord.RichEmbed()
    .setAuthor(`${msg.author.username}`, msg.author.displayAvatarURL)
    .setDescription(`Your Wallpapers:`)
    .setFooter(`Tip: To preview wallpaper try \`${prefix}تجربة\``)

    for (var wall in wallsArray) {
      embed.addField(`Wallpaper No.${wallsArray[wall].number}`, `Price: ${wallsArray[wall].p}`, true)
    }

    msg.channel.send(embed)

  } else if(cmd == 'بروفايل') {

    let getvalueof = msg.mentions.users.first() || msg.author;

    let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = ${getvalueof.id}`)

    if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 200, 0, ${xp}, 0, 0, 0, "Type ${prefix}setinfo to set info", "{}", "{wallSrc: '/walls/p2.png'}"`)


    let Image = Canvas.Image,
    canvas = Canvas.createCanvas(300, 300),
    ctx = canvas.getContext('2d');
fs.readFile(__dirname + `/${JSON.parse(res.profileData).wallSrc}`, function (err, Background) {
  fs.readFile(__dirname + `/walls/p1.png`, function (err, Background) {
  if (err) return console.log(err);
  let BG = Canvas.Image;
  let ground = new Image;
  ground.src = Background;
  ctx.drawImage(ground, 0, 0, 297, 305);
});
  if (err) return console.log(err);
  let BG = Canvas.Image;
  let ground = new Image;
  ground.src = Background;
  ctx.drawImage(ground, 0, 0, 300, 305);
});


let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
Jimp.read(url, (err, ava) => {
    if (err) return console.log(err);
    ava.getBuffer(Jimp.MIME_PNG, async (err, buf) => {
        if (err) return console.log(err);


        //Avatar
       let Avatar = Canvas.Image;
        let ava = new Avatar;
        ava.src = buf;
     ctx.drawImage(ava, 8, 43, 80, 85); // احداثيات صورتك

        //ur name
        ctx.font = 'bold 16px profile'; // حجم الخط و نوعه
        ctx.fontSize = '40px'; // عرض الخط
        ctx.fillStyle = "#FFFFFF"; // لون الخط
        ctx.textAlign = "left"; // محاذا ة النص
        ctx.fillText(`${getvalueof.username}`, 100, 125) // احداثيات اسمك

         //bord
         let leaderboard = await SQLite.all(`SELECT * FROM profileSystem ORDER BY xp DESC, credits DESC`);
        ctx.font = "regular 12px profile" // نوع الخط وحجمه
        ctx.fontSize = '50px'; // عرض الخط
        ctx.fillStyle = "#FFFFFF" // لون الخط
        ctx.textAlign = "left"; // محاذا ة
        for(var i = 0;i<leaderboard.length;i++) {
          if(leaderboard[i].id == getvalueof.id) {
            ctx.fillText(`#${i+1}`, 173, 200)
          }
        }


        //credit
        ctx.font = "bold 10px profile" // نوع الخط وحجمه
        ctx.fontSize = '10px'; // عرض الخط
        ctx.fillStyle = '#FFFFFF' // لون الخط
        ctx.textAlign = "left"; // محاذا ة النص
        ctx.fillText(`$ ${res.credits}`, 156, 163) // احداثيات المصاري

        //poits
        ctx.font = "bold 13px profile" // ن
        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
        ctx.fillStyle = "#FFFFFF" // لون الخط
        ctx.textAlign = "left"; // محاذا ة النص
        ctx.fillText(`${res.xp}`, 173, 182) // احداثيات النقاط

        //Level
        ctx.font = "bold 27px profile" // نوع الخط و حجمه
        ctx.fontSize = '50px'; // عرض الخط
        ctx.fillStyle = "#FFFFFF" // لون الخط
        ctx.textAlign = "left"; // محاذا ة النص
        ctx.fillText(`${res.level}`, 30, 200) // احداثيات اللفل

        //info
        ctx.font = "blod 13px profile" // ن
        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
        ctx.fillStyle = "#FFFFFF" // لون الخط
        ctx.textAlign = "left"; // محاذا ة النص
        ctx.fillText(`${res.info}`, 118, 40) // احداثيات النقاط

        // REP
        ctx.font = "bold 27px profile";
        ctx.fontSize = "100px";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "left";
        ctx.fillText(`+${res.rep}`, 18,270)

msg.channel.send("**:white_check_mark: `Show Profile` ➤**" + `${msg.author}`, {
file: canvas.toBuffer()
})
})
})


  }

});
 
 
client.login(process.env.BOT_TOKEN)
