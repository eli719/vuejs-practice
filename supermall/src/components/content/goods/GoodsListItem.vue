  <template>
    <div>
      <img :src="goodsItem.show.img"/>
      <div>
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
  export default{
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style>
</style>
