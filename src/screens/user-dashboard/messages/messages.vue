<template>
  <div>
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">پیام ها</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="جستجو کنید" v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="بدون نتیجه :("
        :md-description="`پیامی با کلمات ${search} یافت نشد`">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <!--- //TODO::should show if is a new message  --->
        <md-table-cell md-label="عنوان" md-sort-by="name"><md-badge class="md-primary" md-content="جدید"></md-badge>{{ item.title }}</md-table-cell>
        <md-table-cell md-label="فرستنده" md-sort-by="email">{{ item.sender }}</md-table-cell>
        <md-table-cell md-label="خلاصه پیام" md-sort-by="gender">{{ item.content.substring(0,80)+"..." }}</md-table-cell>
        <md-table-cell md-label="تاریخ" md-sort-by="title">{{ item.date }}</md-table-cell>
        <!--- //TODO::bug because i used id as index of message -->
        <md-table-cell md-label="عملیات" md-sort-by="title"><md-button @click="lookMessage(item.id-1)" class="md-raised md-accent">مشاهده</md-button></md-table-cell>
      </md-table-row>
    </md-table>

    <MessageDialog @close="lookMessage" :toggle="message_toggle" :message="message" />

  </div>
</template>

<script>

  import MessageDialog from "./dialog"
   
  // TODO:: add this function to store work with strings
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.content).includes(toLower(term)))
    }

    return items
  }

  export default {
    name: 'UserDashboardMessages',
    data: () => ({
      message_toggle:false,
      search: null,
      searched: [],
      messages: [
        {
          id: 1,
          title: "مهلت بیمه شخص ثالث به اتمام رسیده است",
          sender: "محمد کاظمی - مدیر بیمه ایران",
          content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند",
          date: "دوم شهریور 1398"
        },
        {
          id: 2,
          title: "مهلت بیمه شخص ثالث به اتمام رسیده است",
          sender: "محمد کاظمی - مدیر بیمه ایران",
          content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند",
          date: "دوم شهریور 1398"
        },
        {
          id: 3,
          title: "مهلت بیمه شخص ثالث به اتمام رسیده است",
          sender: "محمد کاظمی - مدیر بیمه ایران",
          content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند",
          date: "دوم شهریور 1398"
        },
        {
          id: 4,
          title: "مهلت بیمه شخص ثالث به اتمام رسیده است",
          sender: "محمد کاظمی - مدیر بیمه ایران",
          content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند",
          date: "دوم شهریور 1398"
        },
      ],
      message:null,
    }),
    methods: {
      searchOnTable () {
        this.searched = searchByName(this.messages, this.search)
      },
      lookMessage(id){
        this.message_toggle = !this.message_toggle;
        this.message = this.messages[id];
      }
    },
    created () {
      this.searched = this.messages
      this.message = this.messages[0]
    },
    components:{
      MessageDialog,
    }
  }
</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }
  .md-table{
      height: 90vh;
  }
</style>