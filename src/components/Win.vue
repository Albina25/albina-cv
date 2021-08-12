<template>
  <div class="information-block">
    <div class="wins">
      <h2 class="title">{{title}}</h2>
      <div class="containers">
        <div class="winnings" v-for="(item,index) of winnings" :key="index">
          <h3 class="title-win">{{item.title}}</h3>
          <span>{{item.win}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wins",
  data: () => ({
    title: 'чем отличилась',
    winnings: [
      {title: 'Уфимский Государственный Авиационный Технический Университет',
      win: 'Победитель в студенческой научно-теоретической конференции "Неделя науки"'},
      {title: 'АО "Международный Аэропорт Уфа"',
      win: 'Победитель в номинации "Лучший специалист"'},
    ],

  })
}

</script>

<style lang="scss">

.wins {
  text-align: center;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .title-win {
    margin-bottom: 1rem;
  }

  .containers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
  }

  .winnings {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2rem 2rem;
    justify-content: space-between;
    background-color: #fff;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(to left, white, #ddd, white);
    }
  }

}
</style>
