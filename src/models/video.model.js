import mongoose , {Mongoose, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema({

    videoFile:{
        type:String,
        required:true,

    },
    thumbnail:{
        type:String,
        rewuire:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        requierd:true
    },
    duration:{
        type:Number,
        require:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        defautl:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video" , videoSchema)