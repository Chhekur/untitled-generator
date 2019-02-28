#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var program = require('commander')
var readline = require('readline')

let pwd = (process.env.PWD == undefined) ? '.' : process.env.PWD;

let arg = process.argv[2];

let tree_init = {
  files:["app.js","url.json","first.jss","package.json"],
  folders:{
    "template":{
      files:["error_log.jade", "index.jade"]
    },
    "static":{},
    "__settings":{
      files:['settings.js']
    },
    "middlewares":{
      files:['access_denied.js', 'check_user.js','favicon.js']
    },
    "models":{
      files:['user.json','department.json']
    }
  }
}

let tree_model = {
  folders:{
    "models":{
      files:['user.json','department.json']
    }
  }
}

let tree_js = {
  files:["app.js","url.json","first.jss","package.json"],
  folders:{
    "template":{
      files:["error_log.jade", "index.jade"]
    },
    "static":{},
    "__settings":{
      files:['settings.js']
    },
    "middlewares":{
      files:['access_denied.js', 'check_user.js','favicon.js']
    }
  }
}

function build(tree, slug=''){
  for(let key in tree){
    if(key == 'files'){
      for(let k in tree[key]){
        let from = path.join(__dirname,'../example', slug, tree[key][k]);
        //console.log(pwd,slug,tree[key][k]);
        let to   = path.join(pwd, slug, tree[key][k]);

        // console.info(from+' => '+to);
        console.info(from);
        fs.createReadStream(from).pipe(fs.createWriteStream(to));
      }
    }else{
      for(let f in tree[key]){
        let slug1 = path.join(slug, f);
        let dir = path.join(pwd, slug1);
        if (!fs.existsSync(dir)){
          //console.info('creating dir  => ' + dir);
          fs.mkdirSync(dir);
        }

        build(tree[key][f],slug1);
      }
      
    }
  }
}

if(arg == 'init'){
  build(tree_init);
  console.info('Done');
}else if(arg == 'js'){
  build(tree_js);
  console.info('Done');
}else if(arg == 'model'){
  build(tree_model);
  console.info('Done'); 
}else{
  console.log();
  console.log('           Untitled - generator Help \n');
  console.log('   untitled [options]\n');
  console.log('   init   : generate whole project for untitled-js and untitled-model');
  console.log('   js     : generate project only for untitled-js');
  console.log('   model  : generate projecst only from untitled-model\n');
}




// if (!fs.existsSync(path.join(pwd,tree.files[0]))){
//     fs.mkdirSync(path.join(pwd,tree.files[0]));
// }

