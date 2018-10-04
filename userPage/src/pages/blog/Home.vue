<style lang="less" scoped>
  @import '../../components/common/color.less';

  .my-blog-home-page {
    padding: 0;
    margin: 0;
    overflow: hidden;

    .my-blog-home-article {
      height: 100%;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
        height: 400 * @vw;
      }

      .personal-profile-container {
        display: flex;
        flex-direction: row;
        margin: auto;
        height: 400 * @vw;
        min-height: 250px;
      }
    }
  }
</style>

<template>
  <div class="my-blog-home-page">
    <article class="my-blog-home-article">
      <nav></nav>
      <img src="../../assets/notebook-1280538.jpg" alt="photo" width="100%" height="400">
      <article class="personal-profile-container">
        <introduction-card :prompt="prompt" :photo="require('../../assets/logoO.png')" :information="information"></introduction-card>
        <message-card :prompt="prompt['introduction']" :photo="require('../../assets/avatar.jpg')" :introduction="aboutMe.introduction"></message-card>
      </article>
    </article>
    <footer></footer>
  </div>
</template>

<script>
import MessageCard from '@/components/blog/MessageCard'
import IntroductionCard from '@/components/blog/IntroductionCard'
import { mapPrompt } from '@/utils'

export default {
  data () {
    return {
      information: {
        name: 'willKing O',
        birth: '1987.11.11',
        email: 'yang@gmail.com',
        career: 'Front End Developer',
        interested: 'Music Movie Technique',
      },
      aboutMe: {
        introduction: `籍贯：杭州                                                                
    学历：本科                                                                
    座右铭：永不放弃                                                                
    毕业院校：杭州师范学院外国语，获文学学士学位。                                                                                                                                    
    名言：短暂的激情是不值钱的，只有持久的激情才是赚钱的。                                                                
    求学时代                                                                
    1982年 18岁，马云高中毕业，参加第一次高考，结果数学才考了1分，高考落榜 .                                                                
    1983年 19岁，第一次落榜后马云就参加了工作，当过秘书，也做过搬运工作，踩着三轮车帮人家把书刊扎在一起，25本成一包，踩10公里路通过火车转发到其他地方后来看了一部路遥写的人生的小说，改变了马云的想法，让他决定重新参加高考而且一定要上大学可惜，第二次参加高考，还是落榜了，数学才考了19分.                                                                
    1984年 20岁，马云坚持自己的想法，继续努力，白天上班晚上上夜校最后参加第三次高考，功夫不负有心人，这次终于考上了杭州师范学院外语系外语外贸专业的专科，离本科差5分，但本科没招满人，马云幸运地上了本科另外，这次高考马云的数学考了89分，有些出人意料                                                                
    1985年 21岁，大一下学期，马云在一位过去在西湖边学英语时认识的外国朋友的帮助下去了一趟澳大利亚，这是马云第一次走出国门                                                                                                                                
    1986-1988 大学学习阶段，除了继续学习英语，马云还把许多精力转到学生工作上，不仅顺利当选为学校学生会主席，                                                                                                                                    
    还再接再厉登上了杭州市学联主席的位置在这期间，马云不仅结识了日后成为其夫人的张英，还结识了一大批朋友，这里面有些人后来成为马云创业时的事业伙伴和重要助手   1988年 24岁，马云大学毕业，分配到杭州电子工业学院[现为杭州电子科技大学]教英文（英文及国际贸易讲师），成为杭州师范学院当年所有500名毕业生中唯一能去大学教书的人，其他人都去了中学教书                                                                
    马云之所以会取得今天的成绩，与他三年的复读生涯相当重要，在后来杨澜采访他时，这么久了，为什么他还在说前两天做了个考数学的噩梦？看似很小的事情为什么他还要在今天相当成功的时候提出来？有没有必然性呢？在他小时候所受到的挫折？在复读时候边打工边复习，数学总是几分，这些事给他的阴影是如此正是自己不舍的追求扛住了，所以进入了大学即使后来的大学甚至是个专科，但这种成就感是很重要的，每个复读过的人是会有这样的体会的进大学后得到的这种解脱让他看到了新的希望，也更加肯定了自己，后来正因为他要更加肯定这一点，所以在早期积累的英语水平让他如虎添翼，很快就达到了一个很好的高度，这样他的人生才刚开始腾飞复读生涯给他的是什么？其一：事情总有困难而无法克服的一面，以致到今天依然害怕数学，但总有一天会过去其二：正因为复读给他的痛苦，所以后来的日子里总是在寻求不断证明自己的机会，好像在不断                                                                                                                                    
    的给以前的自己解脱反观后来公司的发展，正是如此，无论是翻译社，还是中国黄页，阿里巴巴，都走过了那比较痛苦的复读生涯，而后来正是马云在复读生涯中获得的启示，让他觉得自己总会成功，即使不会成功也会有个比较不失败的前途（就像当年考取师专而不是本科），就像寒冬中希望我们是最后一个死去的人宣言一样再加上不断证明自己的不断给自己解脱的那种强大动力，让自己不仅仅只是做了个讲师，做了个翻译社的老总，做了个阿里巴巴的ceo，而是要做世界的number1.都源于此！`
      },
      prompt: {
        name: 'Name',
        birth: 'Birth',
        email: 'E-mail',
        career: 'Career',
        interested: 'Interested',
        introduction: 'About Me'
      }
    }
  },
  methods: {
    mapPrompt(...arg) {
      mapPrompt(...arg)
    }
  },
  components: {
    MessageCard,
    IntroductionCard
  }
}
</script>
