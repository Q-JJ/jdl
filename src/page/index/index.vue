<template>
		<div class="fillcontain"> 
			<div class="contain">
				<el-row :gutter="10" class="row_list">
					<el-col :span="8">
						<div class="row_left row_base">
							<el-col :span="12">
								<div class="pay saleBgcolor data_list rflex">
									<div class="leftItem cflex wflex">
										<p class="investor">{{ $t('index.yearLoss') }}</p>
										<p class="number">68<span class="perTitle">({{ $t('index.tenMillion') }})</span></p>
									</div>
									<div class="rightItem">
										<icon-svg icon-class="iconfukuan" />
									</div>
								</div>
							</el-col>
							<el-col :span="12">
								<div class="pay taxBgcolor data_list rflex">
									<div class="leftItem cflex wflex">
										<p class="investor">{{ $t('index.yearProfit') }}</p>
										<p class="number">120<span class="perTitle">(%)</span></p>
									</div>
									<div class="rightItem">
										<icon-svg icon-class="iconpay3" />
									</div>
								</div>
							</el-col>
						</div>
					</el-col>
					<el-col :span="16">
						<div class="row_right row_base">
							<el-col :span="6">
								<div class="extenedBgcolor data_list rflex">
									<div class="leftItem cflex wflex">
										<p class="investor">库存量</p>
										<p class="number">500<span class="perTitle">(吨)</span></p>
										<p class="cardText">桂万钢</p>
									</div>
									<div class="rightItem">
										<icon-svg icon-class="iconpay2" />
									</div>
								</div>
							</el-col>
							<el-col :span="6">
								<div class="likeBgcolor data_list rflex">
									<div class="leftItem cflex wflex">
										<p class="investor">{{ $t('index.intentionInvestor') }}</p>
										<p class="number">1276<span class="perTitle">({{ $t('index.person') }})</span></p>
										<p class="cardText">Decreased by 50%</p>
									</div>
									<div class="rightItem">
										<icon-svg icon-class="iconpay1" />
									</div>
								</div>
							</el-col>
							<el-col :span="6">
								<div class="linkBgColor data_list rflex">
									<div class="leftItem cflex wflex">
										<p class="investor">{{ $t('index.waitExamineInvestor') }}</p>
										<p class="number">82367<span class="perTitle">({{ $t('index.person') }})</span></p>
										<p class="cardText">Decreased by 30%</p>
									</div>
									<div class="rightItem">
										<icon-svg icon-class="iconpay" />
									</div>
								</div>
							</el-col>
							<el-col :span="6">
								<div class="keleBgColor data_list rflex">
									<div class="leftItem cflex wflex">
										<p class="investor">{{ $t('index.examiningInvestor') }}</p>
										<p class="number">827373<span class="perTitle">({{ $t('index.person') }})</span></p>
										<p class="cardText">Decreased by 80%</p>
									</div>
									<div class="rightItem">
										<icon-svg icon-class="iconfufei0" />
									</div>
								</div>
							</el-col>
						</div>
					</el-col>
				</el-row>
		
			
			 
			</div>
		</div>
</template>

<script>
    export default {
    	data(){
    		return {
			 
    		}
    	},
    	components: {
		},	
		created(){
		},
    	mounted(){
		},
    	methods: {
    	}
    }
</script>

<style lang="less" scoped>

 
    .contain{
        border-radius: 5px;
        height: 100%;
        background: #fff;
        
    }
	.fillcontain{
		height: calc(100% - 30px);
		border-radius: 2px;
		.row_list{
			margin-bottom: 20px;
			.row_base{
				padding: 10px;
				box-sizing: border-box;
				background: #fff;
				border-radius: 6px;
				height: 120px;
			}
		}
		.data_list{
			text-align: center;
			font-size: 14px;
            border-radius: 6px;
			padding: 10px;
			color:#fff;
			height: 80px;
			.leftItem{
				align-items: start;
				justify-content: space-between;
				text-align: left;
			}
			.rightItem{
				width:62px;
				display: flex;
				align-items: center;
				justify-content: center;
				.svg-icon{
					font-size: 30px;
				}
			}
		    .number{
				font-size: 22px;
				font-weight: bold;
				.perTitle{
					font-size: 13px;
   				    margin-left: 5px;
				}
			}
		}
		.pay{
			.leftItem{
				justify-content: space-around;
			}
		}
     
	}
  
</style>
