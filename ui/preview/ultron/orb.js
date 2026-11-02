var ws={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zp=0,Gu=1,Vp=2;var va=1,Gp=2,Kr=3,$i=0,An=1,ni=2,ii=0,Zs=1,zn=2,Hu=3,Wu=4,Hp=5;var _s=100,Wp=101,Xp=102,qp=103,Yp=104,Zp=200,Kp=201,jp=202,Jp=203,Nl=204,Fl=205,$p=206,Qp=207,tm=208,em=209,nm=210,im=211,sm=212,rm=213,om=214,Ol=0,Bl=1,kl=2,Ks=3,zl=4,Vl=5,Gl=6,Hl=7,Xu=0,am=1,lm=2,_i=0,qu=1,Yu=2,Zu=3,ya=4,Ku=5,ju=6,Ju=7;var $u=300,Cs=301,Js=302,_c=303,xc=304,Ma=306,Wl=1e3,Ri=1001,Xl=1002,an=1003,cm=1004;var ba=1005;var Ze=1006,vc=1007;var Rs=1008;var Vn=1009,Qu=1010,td=1011,jr=1012,yc=1013,xi=1014,vi=1015,gn=1016,Mc=1017,bc=1018,Jr=1020,ed=35902,nd=35899,id=1021,sd=1022,si=1023,Pi=1026,Ps=1027,rd=1028,Sc=1029,Is=1030,Ec=1031;var Tc=1033,Sa=33776,Ea=33777,Ta=33778,wa=33779,wc=35840,Ac=35841,Cc=35842,Rc=35843,Pc=36196,Ic=37492,Lc=37496,Dc=37488,Uc=37489,Aa=37490,Nc=37491,Fc=37808,Oc=37809,Bc=37810,kc=37811,zc=37812,Vc=37813,Gc=37814,Hc=37815,Wc=37816,Xc=37817,qc=37818,Yc=37819,Zc=37820,Kc=37821,jc=36492,Jc=36494,$c=36495,Qc=36283,th=36284,Ca=36285,eh=36286;var qo=2300,ql=2301,Ul=2302,Uu=2303,Nu=2400,Fu=2401,Ou=2402;var hm=3200;var od=0,um=1,es="",On="srgb",Yo="srgb-linear",Zo="linear",ae="srgb";var qs=7680;var Bu=519,dm=512,fm=513,pm=514,nh=515,mm=516,gm=517,ih=518,_m=519,Yl=35044;var ad="300 es",mi=2e3,Ko=2001;function A1(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function C1(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function jo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function xm(){let e=jo("canvas");return e.style.display="block",e}var fp={},Fr=null;function Jo(...e){let t="THREE."+e.shift();Fr?Fr("log",t,...e):console.log(t,...e)}function vm(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Lt(...e){e=vm(e);let t="THREE."+e.shift();if(Fr)Fr("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ft(...e){e=vm(e);let t="THREE."+e.shift();if(Fr)Fr("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ys(...e){let t=e.join(" ");t in fp||(fp[t]=!0,Lt(...e))}function ym(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Mm={[Ol]:Bl,[kl]:Gl,[zl]:Hl,[Ks]:Vl,[Bl]:Ol,[Gl]:kl,[Hl]:zl,[Vl]:Ks},gi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pp=1234567,Ur=Math.PI/180,Or=180/Math.PI;function ji(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[e&255]+fn[e>>8&255]+fn[e>>16&255]+fn[e>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function Yt(e,t,n){return Math.max(t,Math.min(n,e))}function ld(e,t){return(e%t+t)%t}function R1(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function P1(e,t,n){return e!==t?(n-e)/(t-e):0}function Xo(e,t,n){return(1-n)*e+n*t}function I1(e,t,n,i){return Xo(e,t,1-Math.exp(-n*i))}function L1(e,t=1){return t-Math.abs(ld(e,t*2)-t)}function D1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function U1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function N1(e,t){return e+Math.floor(Math.random()*(t-e+1))}function F1(e,t){return e+Math.random()*(t-e)}function O1(e){return e*(.5-Math.random())}function B1(e){e!==void 0&&(pp=e);let t=pp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function k1(e){return e*Ur}function z1(e){return e*Or}function V1(e){return(e&e-1)===0&&e!==0}function G1(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function H1(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function W1(e,t,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((t+i)/2),u=o((t+i)/2),d=r((t-i)/2),h=o((t-i)/2),p=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":e.set(a*u,l*d,l*h,a*c);break;case"YZY":e.set(l*h,a*u,l*d,a*c);break;case"ZXZ":e.set(l*d,l*h,a*u,a*c);break;case"XZX":e.set(a*u,l*_,l*p,a*c);break;case"YXY":e.set(l*p,a*u,l*_,a*c);break;case"ZYZ":e.set(l*_,l*p,a*u,a*c);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ce(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $r={DEG2RAD:Ur,RAD2DEG:Or,generateUUID:ji,clamp:Yt,euclideanModulo:ld,mapLinear:R1,inverseLerp:P1,lerp:Xo,damp:I1,pingpong:L1,smoothstep:D1,smootherstep:U1,randInt:N1,randFloat:F1,randFloatSpread:O1,seededRandom:B1,degToRad:k1,radToDeg:z1,isPowerOfTwo:V1,ceilPowerOfTwo:G1,floorPowerOfTwo:H1,setQuaternionFromProperEuler:W1,normalize:ce,denormalize:pi},Mt=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bn=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3];if(d!==M||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+d*M;m<0&&(h=-h,p=-p,_=-_,M=-M,m=-m);let f=1-a;if(m<.9995){let b=Math.acos(m),A=Math.sin(b);f=Math.sin(f*b)/A,a=Math.sin(a*b)/A,l=l*f+h*a,c=c*f+p*a,u=u*f+_*a,d=d*f+M*a}else{l=l*f+h*a,c=c*f+p*a,u=u*f+_*a,d=d*f+M*a;let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],_=r[o+3];return t[n]=a*_+u*d+l*p-c*h,t[n+1]=l*_+u*h+c*d-a*p,t[n+2]=c*_+u*p+a*h-l*d,t[n+3]=u*_-a*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(mp.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(mp.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return hu.copy(this).projectOnVector(t),this.sub(hu)}reflect(t){return this.sub(hu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hu=new P,mp=new Bn,kt=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c)}set(t,n,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],_=i[8],M=s[0],m=s[3],f=s[6],b=s[1],A=s[4],y=s[7],w=s[2],S=s[5],C=s[8];return r[0]=o*M+a*b+l*w,r[3]=o*m+a*A+l*S,r[6]=o*f+a*y+l*C,r[1]=c*M+u*b+d*w,r[4]=c*m+u*A+d*S,r[7]=c*f+u*y+d*C,r[2]=h*M+p*b+_*w,r[5]=h*m+p*A+_*S,r[8]=h*f+p*y+_*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,_=n*d+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=d*M,t[1]=(s*c-u*i)*M,t[2]=(a*i-s*o)*M,t[3]=h*M,t[4]=(u*n-s*l)*M,t[5]=(s*r-a*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(o*n-i*r)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(t,n){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uu.makeScale(t,n)),this}rotate(t){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uu.makeRotation(-t)),this}translate(t,n){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},uu=new kt,gp=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_p=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X1(){let e={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(s.r=Nr(s.r),s.g=Nr(s.g),s.b=Nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Yo]:{primaries:t,whitePoint:i,transfer:Zo,toXYZ:gp,fromXYZ:_p,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:gp,fromXYZ:_p,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),e}var Zt=X1();function Ji(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Nr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var xr,Zl=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xr===void 0&&(xr=jo("canvas")),xr.width=t.width,xr.height=t.height;let s=xr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=jo("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ji(n[i]/255)*255):n[i]=Ji(n[i]);return{data:n,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},q1=0,Br=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(du(s[o].image)):r.push(du(s[o]))}else r=du(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function du(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Zl.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var Y1=0,fu=new P,Tn=class e extends gi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ri,s=Ri,r=Ze,o=Rs,a=si,l=Vn,c=e.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=ji(),this.name="",this.source=new Br(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fu).x}get height(){return this.source.getSize(fu).y}get depth(){return this.source.getSize(fu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wl:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case Xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wl:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case Xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=$u;Tn.DEFAULT_ANISOTROPY=1;var Ce=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let A=(c+1)/2,y=(p+1)/2,w=(f+1)/2,S=(u+h)/4,C=(d+M)/4,x=(_+m)/4;return A>y&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=S/i,r=C/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=x/r),this.set(i,s,r,n),this}let b=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-M)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this.w=Yt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this.w=Yt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kl=class extends gi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ce(0,0,t,n),this.scissorTest=!1,this.viewport=new Ce(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},r=new Tn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Br(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends Kl{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},$o=class extends Tn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jl=class extends Tn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ee=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,r,o,a,l,c,u,d,h,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c,u,d,h,p,_,M,m)}set(t,n,i,s,r,o,a,l,c,u,d,h,p,_,M,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/vr.setFromMatrixColumn(t,0).length(),r=1/vr.setFromMatrixColumn(t,1).length(),o=1/vr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,p=o*d,_=a*u,M=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-M*c,n[9]=-a*l,n[2]=M-h*c,n[6]=_+p*c,n[10]=o*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,_=c*u,M=c*d;n[0]=h+M*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=M+h*a,n[10]=o*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,_=c*u,M=c*d;n[0]=h-M*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=M-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(t.order==="ZYX"){let h=o*u,p=o*d,_=a*u,M=a*d;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+M,n[1]=l*d,n[5]=M*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(t.order==="YZX"){let h=o*l,p=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=M-h*d,n[8]=_*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+_,n[10]=h-M*d}else if(t.order==="XZY"){let h=o*l,p=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+M,n[5]=o*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*u,n[10]=M*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z1,t,K1)}lookAt(t,n,i){let s=this.elements;return Nn.subVectors(t,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),us.crossVectors(i,Nn),us.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),us.crossVectors(i,Nn)),us.normalize(),sl.crossVectors(Nn,us),s[0]=us.x,s[4]=sl.x,s[8]=Nn.x,s[1]=us.y,s[5]=sl.y,s[9]=Nn.y,s[2]=us.z,s[6]=sl.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],_=i[2],M=i[6],m=i[10],f=i[14],b=i[3],A=i[7],y=i[11],w=i[15],S=s[0],C=s[4],x=s[8],E=s[12],I=s[1],L=s[5],F=s[9],j=s[13],J=s[2],O=s[6],K=s[10],X=s[14],nt=s[3],ot=s[7],ft=s[11],gt=s[15];return r[0]=o*S+a*I+l*J+c*nt,r[4]=o*C+a*L+l*O+c*ot,r[8]=o*x+a*F+l*K+c*ft,r[12]=o*E+a*j+l*X+c*gt,r[1]=u*S+d*I+h*J+p*nt,r[5]=u*C+d*L+h*O+p*ot,r[9]=u*x+d*F+h*K+p*ft,r[13]=u*E+d*j+h*X+p*gt,r[2]=_*S+M*I+m*J+f*nt,r[6]=_*C+M*L+m*O+f*ot,r[10]=_*x+M*F+m*K+f*ft,r[14]=_*E+M*j+m*X+f*gt,r[3]=b*S+A*I+y*J+w*nt,r[7]=b*C+A*L+y*O+w*ot,r[11]=b*x+A*F+y*K+w*ft,r[15]=b*E+A*j+y*X+w*gt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],_=t[3],M=t[7],m=t[11],f=t[15],b=l*p-c*h,A=a*p-c*d,y=a*h-l*d,w=o*p-c*u,S=o*h-l*u,C=o*d-a*u;return n*(M*b-m*A+f*y)-i*(_*b-m*w+f*S)+s*(_*A-M*w+f*C)-r*(_*y-M*S+m*C)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],_=t[12],M=t[13],m=t[14],f=t[15],b=n*a-i*o,A=n*l-s*o,y=n*c-r*o,w=i*l-s*a,S=i*c-r*a,C=s*c-r*l,x=u*M-d*_,E=u*m-h*_,I=u*f-p*_,L=d*m-h*M,F=d*f-p*M,j=h*f-p*m,J=b*j-A*F+y*L+w*I-S*E+C*x;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/J;return t[0]=(a*j-l*F+c*L)*O,t[1]=(s*F-i*j-r*L)*O,t[2]=(M*C-m*S+f*w)*O,t[3]=(h*S-d*C-p*w)*O,t[4]=(l*I-o*j-c*E)*O,t[5]=(n*j-s*I+r*E)*O,t[6]=(m*y-_*C-f*A)*O,t[7]=(u*C-h*y+p*A)*O,t[8]=(o*F-a*I+c*x)*O,t[9]=(i*I-n*F-r*x)*O,t[10]=(_*S-M*y+f*b)*O,t[11]=(d*y-u*S-p*b)*O,t[12]=(a*E-o*L-l*x)*O,t[13]=(n*L-i*E+s*x)*O,t[14]=(M*A-_*w-m*b)*O,t[15]=(u*w-d*A+h*b)*O,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,_=r*d,M=o*u,m=o*d,f=a*d,b=l*c,A=l*u,y=l*d,w=i.x,S=i.y,C=i.z;return s[0]=(1-(M+f))*w,s[1]=(p+y)*w,s[2]=(_-A)*w,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(h+f))*S,s[6]=(m+b)*S,s[7]=0,s[8]=(_+A)*C,s[9]=(m-b)*C,s[10]=(1-(h+M))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=vr.set(s[0],s[1],s[2]).length(),a=vr.set(s[4],s[5],s[6]).length(),l=vr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ui.copy(this);let c=1/o,u=1/a,d=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,n.setFromRotationMatrix(ui),i.x=o,i.y=a,i.z=l,this}makePerspective(t,n,i,s,r,o,a=mi,l=!1){let c=this.elements,u=2*r/(n-t),d=2*r/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),_,M;if(l)_=r/(o-r),M=o*r/(o-r);else if(a===mi)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Ko)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=mi,l=!1){let c=this.elements,u=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),_,M;if(l)_=1/(o-r),M=o/(o-r);else if(a===mi)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===Ko)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},vr=new P,ui=new Ee,Z1=new P(0,0,0),K1=new P(1,1,1),us=new P,sl=new P,Nn=new P,xp=new Ee,vp=new Bn,xs=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return xp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xp,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return vp.setFromEuler(this),this.setFromQuaternion(vp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xs.DEFAULT_ORDER="XYZ";var Qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},j1=0,yp=new P,yr=new Bn,Xi=new Ee,rl=new P,Oo=new P,J1=new P,$1=new Bn,Mp=new P(1,0,0),bp=new P(0,1,0),Sp=new P(0,0,1),Ep={type:"added"},Q1={type:"removed"},Mr={type:"childadded",child:null},pu={type:"childremoved",child:null},wn=class e extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new xs,i=new Bn,s=new P(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new kt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return yr.setFromAxisAngle(t,n),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,n){return yr.setFromAxisAngle(t,n),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(Mp,t)}rotateY(t){return this.rotateOnAxis(bp,t)}rotateZ(t){return this.rotateOnAxis(Sp,t)}translateOnAxis(t,n){return yp.copy(t).applyQuaternion(this.quaternion),this.position.add(yp.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Mp,t)}translateY(t){return this.translateOnAxis(bp,t)}translateZ(t){return this.translateOnAxis(Sp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?rl.copy(t):rl.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Oo,rl,this.up):Xi.lookAt(rl,Oo,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(Xi),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ep),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Q1),pu.child=t,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ep),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,J1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,$1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(n){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};wn.DEFAULT_UP=new P(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=class extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}},tx={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let m=n.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new En;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},ol={h:0,s:0,l:0};function mu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Zt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Zt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Zt.workingColorSpace){if(t=ld(t,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=mu(o,r,t+1/3),this.g=mu(o,r,t),this.b=mu(o,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,n=On){function i(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=On){let i=bm[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return Zt.workingToColorSpace(pn.copy(this),t),Math.round(Yt(pn.r*255,0,255))*65536+Math.round(Yt(pn.g*255,0,255))*256+Math.round(Yt(pn.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Zt.workingColorSpace){Zt.workingToColorSpace(pn.copy(this),n);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=Zt.workingColorSpace){return Zt.workingToColorSpace(pn.copy(this),n),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=On){Zt.workingToColorSpace(pn.copy(this),t);let n=pn.r,i=pn.g,s=pn.b;return t!==On?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+n,ds.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ds),t.getHSL(ol);let i=Xo(ds.h,ol.h,n),s=Xo(ds.s,ol.s,n),r=Xo(ds.l,ol.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new zt;zt.NAMES=bm;var ta=class extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},di=new P,qi=new P,gu=new P,Yi=new P,br=new P,Sr=new P,Tp=new P,_u=new P,xu=new P,vu=new P,yu=new Ce,Mu=new Ce,bu=new Ce,Ci=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),di.subVectors(t,n),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){di.subVectors(s,n),qi.subVectors(i,n),gu.subVectors(t,n);let o=di.dot(di),a=di.dot(qi),l=di.dot(gu),c=qi.dot(qi),u=qi.dot(gu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,n,i,s,r,o,a,l){return this.getBarycoord(t,n,i,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(o,Yi.y),l.addScaledVector(a,Yi.z),l)}static getInterpolatedAttribute(t,n,i,s,r,o){return yu.setScalar(0),Mu.setScalar(0),bu.setScalar(0),yu.fromBufferAttribute(t,n),Mu.fromBufferAttribute(t,i),bu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yu,r.x),o.addScaledVector(Mu,r.y),o.addScaledVector(bu,r.z),o}static isFrontFacing(t,n,i,s){return di.subVectors(i,n),qi.subVectors(t,n),di.cross(qi).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),di.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,o,a;br.subVectors(s,i),Sr.subVectors(r,i),_u.subVectors(t,i);let l=br.dot(_u),c=Sr.dot(_u);if(l<=0&&c<=0)return n.copy(i);xu.subVectors(t,s);let u=br.dot(xu),d=Sr.dot(xu);if(u>=0&&d<=u)return n.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(br,o);vu.subVectors(t,r);let p=br.dot(vu),_=Sr.dot(vu);if(_>=0&&p<=_)return n.copy(r);let M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Sr,a);let m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Tp.subVectors(r,s),a=(d-u)/(d-u+(p-_)),n.copy(s).addScaledVector(Tp,a);let f=1/(m+M+h);return o=M*f,a=h*f,n.copy(i).addScaledVector(br,o).addScaledVector(Sr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vs=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(fi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=fi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fi):fi.fromBufferAttribute(r,o),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),al.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),al.copy(i.boundingBox)),al.applyMatrix4(t.matrixWorld),this.union(al)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),ll.subVectors(this.max,Bo),Er.subVectors(t.a,Bo),Tr.subVectors(t.b,Bo),wr.subVectors(t.c,Bo),fs.subVectors(Tr,Er),ps.subVectors(wr,Tr),Gs.subVectors(Er,wr);let n=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Gs.z,Gs.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Gs.z,0,-Gs.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Gs.y,Gs.x,0];return!Su(n,Er,Tr,wr,ll)||(n=[1,0,0,0,1,0,0,0,1],!Su(n,Er,Tr,wr,ll))?!1:(cl.crossVectors(fs,ps),n=[cl.x,cl.y,cl.z],Su(n,Er,Tr,wr,ll))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zi=[new P,new P,new P,new P,new P,new P,new P,new P],fi=new P,al=new vs,Er=new P,Tr=new P,wr=new P,fs=new P,ps=new P,Gs=new P,Bo=new P,ll=new P,cl=new P,Hs=new P;function Su(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){Hs.fromArray(e,r);let a=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),l=t.dot(Hs),c=n.dot(Hs),u=i.dot(Hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var We=new P,hl=new Mt,ex=0,Rn=class extends gi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ex++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Yl,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(t),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix3(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix4(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyNormalMatrix(t),this.setXYZ(n,We.x,We.y,We.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.transformDirection(t),this.setXYZ(n,We.x,We.y,We.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=pi(n,this.array)),n}setX(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=pi(n,this.array)),n}setY(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=pi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=pi(n,this.array)),n}setW(t,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var ea=class extends Rn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var na=class extends Rn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var se=class extends Rn{constructor(t,n,i){super(new Float32Array(t),n,i)}},nx=new vs,ko=new P,Eu=new P,ys=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):nx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);let n=ko.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ko,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(Eu)),this.expandByPoint(ko.copy(t.center).sub(Eu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ix=0,Qn=new Ee,Tu=new wn,Ar=new P,Fn=new vs,zo=new vs,on=new P,le=class e extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(A1(t)?na:ea)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,n,i){return Qn.makeTranslation(t,n,i),this.applyMatrix4(Qn),this}scale(t,n,i){return Qn.makeScale(t,n,i),this.applyMatrix4(Qn),this}lookAt(t){return Tu.lookAt(t),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Fn.min,zo.min),Fn.expandByPoint(on),on.addVectors(Fn.max,zo.max),Fn.expandByPoint(on)):(Fn.expandByPoint(zo.min),Fn.expandByPoint(zo.max))}Fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(on));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(t,c),on.add(Ar)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new P,l[x]=new P;let c=new P,u=new P,d=new P,h=new Mt,p=new Mt,_=new Mt,M=new P,m=new P;function f(x,E,I){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,I),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,I),u.sub(c),d.sub(c),p.sub(h),_.sub(h);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),a[x].add(M),a[E].add(M),a[I].add(M),l[x].add(m),l[E].add(m),l[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,E=b.length;x<E;++x){let I=b[x],L=I.start,F=I.count;for(let j=L,J=L+F;j<J;j+=3)f(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let A=new P,y=new P,w=new P,S=new P;function C(x){w.fromBufferAttribute(s,x),S.copy(w);let E=a[x];A.copy(E),A.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(S,E);let L=y.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,L)}for(let x=0,E=b.length;x<E;++x){let I=b[x],L=I.start,F=I.count;for(let j=L,J=L+F;j<J;j+=3)C(t.getX(j+0)),C(t.getX(j+1)),C(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let h=0,p=t.count;h<p;h+=3){let _=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,M),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)on.fromBufferAttribute(t,n),on.normalize(),t.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new Rn(h,u,d)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jl=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Yl,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new P,ia=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=pi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=pi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=pi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=pi(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=ce(n,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Jo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new Rn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Jo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sx=0,Ii=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Zs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Fl,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Lt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Mt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},zr=class extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cr,Vo=new P,Rr=new P,Pr=new P,Ir=new Mt,Go=new Mt,Sm=new Ee,ul=new P,Ho=new P,dl=new P,wp=new Mt,wu=new Mt,Ap=new Mt,sa=class extends wn{constructor(t=new zr){if(super(),this.isSprite=!0,this.type="Sprite",Cr===void 0){Cr=new le;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jl(n,5);Cr.setIndex([0,1,2,0,2,3]),Cr.setAttribute("position",new ia(i,3,0,!1)),Cr.setAttribute("uv",new ia(i,2,3,!1))}this.geometry=Cr,this.material=t,this.center=new Mt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rr.setFromMatrixScale(this.matrixWorld),Sm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rr.multiplyScalar(-Pr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;fl(ul.set(-.5,-.5,0),Pr,o,Rr,s,r),fl(Ho.set(.5,-.5,0),Pr,o,Rr,s,r),fl(dl.set(.5,.5,0),Pr,o,Rr,s,r),wp.set(0,0),wu.set(1,0),Ap.set(1,1);let a=t.ray.intersectTriangle(ul,Ho,dl,!1,Vo);if(a===null&&(fl(Ho.set(-.5,.5,0),Pr,o,Rr,s,r),wu.set(0,1),a=t.ray.intersectTriangle(ul,dl,Ho,!1,Vo),a===null))return;let l=t.ray.origin.distanceTo(Vo);l<t.near||l>t.far||n.push({distance:l,point:Vo.clone(),uv:Ci.getInterpolation(Vo,ul,Ho,dl,wp,wu,Ap,new Mt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fl(e,t,n,i,s,r){Ir.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Go.x=r*Ir.x-s*Ir.y,Go.y=s*Ir.x+r*Ir.y):Go.copy(Ir),e.copy(t),e.x+=Go.x,e.y+=Go.y,e.applyMatrix4(Sm)}var Ki=new P,Au=new P,pl=new P,ms=new P,Cu=new P,ml=new P,Ru=new P,Ms=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ki.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Au.copy(t).add(n).multiplyScalar(.5),pl.copy(n).sub(t).normalize(),ms.copy(this.origin).sub(Au);let r=t.distanceTo(n)*.5,o=-this.direction.dot(pl),a=ms.dot(this.direction),l=-ms.dot(pl),c=ms.lengthSq(),u=Math.abs(1-o*o),d,h,p,_;if(u>0)if(d=o*l-a,h=o*a-l,_=r*u,d>=0)if(h>=-_)if(h<=_){let M=1/u;d*=M,h*=M,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Au).addScaledVector(pl,h),p}intersectSphere(t,n){Ki.subVectors(t.center,this.origin);let i=Ki.dot(this.direction),s=Ki.dot(Ki)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,n,i,s,r){Cu.subVectors(n,t),ml.subVectors(i,t),Ru.crossVectors(Cu,ml);let o=this.direction.dot(Ru),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ms.subVectors(this.origin,t);let l=a*this.direction.dot(ml.crossVectors(ms,ml));if(l<0)return null;let c=a*this.direction.dot(Cu.cross(ms));if(c<0||l+c>o)return null;let u=-a*ms.dot(Ru);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ei=class extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Cp=new Ee,Ws=new Ms,gl=new ys,Rp=new P,_l=new P,xl=new P,vl=new P,Pu=new P,yl=new P,Pp=new P,Ml=new P,je=class extends wn{constructor(t=new le,n=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){yl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Pu.fromBufferAttribute(d,t),o?yl.addScaledVector(Pu,u):yl.addScaledVector(Pu.sub(n),u))}n.add(yl)}return n}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),Ws.copy(t.ray).recast(t.near),!(gl.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(gl,Rp)===null||Ws.origin.distanceToSquared(Rp)>(t.far-t.near)**2))&&(Cp.copy(r).invert(),Ws.copy(t.ray).applyMatrix4(Cp),!(i.boundingBox!==null&&Ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ws)))}_computeIntersections(t,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){let m=h[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,w=A;y<w;y+=3){let S=a.getX(y),C=a.getX(y+1),x=a.getX(y+2);s=bl(this,f,t,i,c,u,d,S,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){let b=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);s=bl(this,o,t,i,c,u,d,b,A,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){let m=h[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,w=A;y<w;y+=3){let S=y,C=y+1,x=y+2;s=bl(this,f,t,i,c,u,d,S,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){let b=m,A=m+1,y=m+2;s=bl(this,o,t,i,c,u,d,b,A,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function rx(e,t,n,i,s,r,o,a){let l;if(t.side===An?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===$i,a),l===null)return null;Ml.copy(a),Ml.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Ml);return c<n.near||c>n.far?null:{distance:c,point:Ml.clone(),object:e}}function bl(e,t,n,i,s,r,o,a,l,c){e.getVertexPosition(a,_l),e.getVertexPosition(l,xl),e.getVertexPosition(c,vl);let u=rx(e,t,n,i,_l,xl,vl,Pp);if(u){let d=new P;Ci.getBarycoord(Pp,_l,xl,vl,d),s&&(u.uv=Ci.getInterpolatedAttribute(s,a,l,c,d,new Mt)),r&&(u.uv1=Ci.getInterpolatedAttribute(r,a,l,c,d,new Mt)),o&&(u.normal=Ci.getInterpolatedAttribute(o,a,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new P,materialIndex:0};Ci.getNormal(_l,xl,vl,h.normal),u.face=h,u.barycoord=d}return u}var $l=class extends Tn{constructor(t=null,n=1,i=1,s,r,o,a,l,c=an,u=an,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Iu=new P,ox=new P,ax=new kt,ti=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Iu.subVectors(i,n).cross(ox.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Iu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||ax.getNormalMatrix(t),s=this.coplanarPoint(Iu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xs=new ys,lx=new Mt(.5,.5),Sl=new P,ra=class{constructor(t=new ti,n=new ti,i=new ti,s=new ti,r=new ti,o=new ti){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=mi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],_=r[8],M=r[9],m=r[10],f=r[11],b=r[12],A=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,p-u,f-_,w-b).normalize(),s[1].setComponents(c+o,p+u,f+_,w+b).normalize(),s[2].setComponents(c+a,p+d,f+M,w+A).normalize(),s[3].setComponents(c-a,p-d,f-M,w-A).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,f-m,w-y).normalize();else if(s[4].setComponents(c-l,p-h,f-m,w-y).normalize(),n===mi)s[5].setComponents(c+l,p+h,f+m,w+y).normalize();else if(n===Ko)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);let n=lx.distanceTo(t.center);return Xs.radius=.7071067811865476+n,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Sl.x=s.normal.x>0?t.max.x:t.min.x,Sl.y=s.normal.y>0?t.max.y:t.min.y,Sl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vr=class extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ql=new P,tc=new P,Ip=new Ee,Wo=new Ms,El=new ys,Lu=new P,Lp=new P,cn=class extends wn{constructor(t=new le,n=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Ql.fromBufferAttribute(n,s-1),tc.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Ql.distanceTo(tc);t.setAttribute("lineDistance",new se(i,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(s),El.radius+=r,t.ray.intersectsSphere(El)===!1)return;Ip.copy(s).invert(),Wo.copy(t.ray).applyMatrix4(Ip);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=p,m=_-1;M<m;M+=c){let f=u.getX(M),b=u.getX(M+1),A=Tl(this,t,Wo,l,f,b,M);A&&n.push(A)}if(this.isLineLoop){let M=u.getX(_-1),m=u.getX(p),f=Tl(this,t,Wo,l,M,m,_-1);f&&n.push(f)}}else{let p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let M=p,m=_-1;M<m;M+=c){let f=Tl(this,t,Wo,l,M,M+1,M);f&&n.push(f)}if(this.isLineLoop){let M=Tl(this,t,Wo,l,_-1,p,_-1);M&&n.push(M)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tl(e,t,n,i,s,r,o){let a=e.geometry.attributes.position;if(Ql.fromBufferAttribute(a,s),tc.fromBufferAttribute(a,r),n.distanceSqToSegment(Ql,tc,Lu,Lp)>i)return;Lu.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Lu);if(!(c<t.near||c>t.far))return{distance:c,point:Lp.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Dp=new P,Up=new P,Gr=class extends cn{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Dp.fromBufferAttribute(n,s),Up.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Dp.distanceTo(Up);t.setAttribute("lineDistance",new se(i,1))}else Lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hr=class extends Ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Np=new Ee,ku=new Ms,wl=new ys,Al=new P,oa=class extends wn{constructor(t=new le,n=new Hr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(s),wl.radius+=r,t.ray.intersectsSphere(wl)===!1)return;Np.copy(s).invert(),ku.copy(t.ray).applyMatrix4(Np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,M=p;_<M;_++){let m=c.getX(_);Al.fromBufferAttribute(d,m),Fp(Al,m,l,s,t,n,this)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=h,M=p;_<M;_++)Al.fromBufferAttribute(d,_),Fp(Al,_,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fp(e,t,n,i,s,r,o){let a=ku.distanceSqToPoint(e);if(a<n){let l=new P;ku.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var aa=class extends Tn{constructor(t=[],n=Cs,i,s,r,o,a,l,c,u){super(t,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wr=class extends Tn{constructor(t,n,i,s,r,o,a,l,c){super(t,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class extends Tn{constructor(t,n,i=xi,s,r,o,a=an,l=an,c,u=Pi,d=1){if(u!==Pi&&u!==Ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Br(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ec=class extends Qi{constructor(t,n=xi,i=Cs,s,r,o=an,a=an,l,c=Pi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},la=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xr=class e extends le{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;_("z","y","x",-1,-1,i,n,t,o,r,0),_("z","y","x",1,-1,i,n,-t,o,r,1),_("x","z","y",1,1,t,i,n,s,o,2),_("x","z","y",1,-1,t,i,-n,s,o,3),_("x","y","z",1,-1,t,n,i,s,r,4),_("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2));function _(M,m,f,b,A,y,w,S,C,x,E){let I=y/C,L=w/x,F=y/2,j=w/2,J=S/2,O=C+1,K=x+1,X=0,nt=0,ot=new P;for(let ft=0;ft<K;ft++){let gt=ft*L-j;for(let St=0;St<O;St++){let Kt=St*I-F;ot[M]=Kt*b,ot[m]=gt*A,ot[f]=J,c.push(ot.x,ot.y,ot.z),ot[M]=0,ot[m]=0,ot[f]=S>0?1:-1,u.push(ot.x,ot.y,ot.z),d.push(St/C),d.push(1-ft/x),X+=1}}for(let ft=0;ft<x;ft++)for(let gt=0;gt<C;gt++){let St=h+gt+O*ft,Kt=h+gt+O*(ft+1),_e=h+(gt+1)+O*(ft+1),jt=h+(gt+1)+O*ft;l.push(St,Kt,jt),l.push(Kt,_e,jt),nt+=6}a.addGroup(p,nt,E),p+=nt,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ca=class e extends le{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],o=[],a=[],l=[],c=new P,u=new Mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){let p=i+d/n*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var qr=class e extends le{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let A=new P,y=new P,w=new P;for(let S=0;S<n.length;S+=3)p(n[S+0],A),p(n[S+1],y),p(n[S+2],w),l(A,y,w,b)}function l(b,A,y,w){let S=w+1,C=[];for(let x=0;x<=S;x++){C[x]=[];let E=b.clone().lerp(y,x/S),I=A.clone().lerp(y,x/S),L=S-x;for(let F=0;F<=L;F++)F===0&&x===S?C[x][F]=E:C[x][F]=E.clone().lerp(I,F/L)}for(let x=0;x<S;x++)for(let E=0;E<2*(S-x)-1;E++){let I=Math.floor(E/2);E%2===0?(h(C[x][I+1]),h(C[x+1][I]),h(C[x][I])):(h(C[x][I+1]),h(C[x+1][I+1]),h(C[x+1][I]))}}function c(b){let A=new P;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(b),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function u(){let b=new P;for(let A=0;A<r.length;A+=3){b.x=r[A+0],b.y=r[A+1],b.z=r[A+2];let y=m(b)/2/Math.PI+.5,w=f(b)/Math.PI+.5;o.push(y,1-w)}_(),d()}function d(){for(let b=0;b<o.length;b+=6){let A=o[b+0],y=o[b+2],w=o[b+4],S=Math.max(A,y,w),C=Math.min(A,y,w);S>.9&&C<.1&&(A<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),w<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function p(b,A){let y=b*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function _(){let b=new P,A=new P,y=new P,w=new P,S=new Mt,C=new Mt,x=new Mt;for(let E=0,I=0;E<r.length;E+=9,I+=6){b.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),S.set(o[I+0],o[I+1]),C.set(o[I+2],o[I+3]),x.set(o[I+4],o[I+5]),w.copy(b).add(A).add(y).divideScalar(3);let L=m(w);M(S,I+0,b,L),M(C,I+2,A,L),M(x,I+4,y,L)}}function M(b,A,y,w){w<0&&b.x===1&&(o[A]=b.x-1),y.x===0&&y.z===0&&(o[A]=w/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}};var Cl=new P,Rl=new P,Du=new P,Pl=new Ci,Yr=class extends le{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){let s=Math.pow(10,4),r=Math.cos(Ur*n),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:M,b:m,c:f}=Pl;if(M.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Pl.getNormal(Du),d[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let A=(b+1)%3,y=d[b],w=d[A],S=Pl[u[b]],C=Pl[u[A]],x=`${y}_${w}`,E=`${w}_${y}`;E in h&&h[E]?(Du.dot(h[E].normal)<=r&&(p.push(S.x,S.y,S.z),p.push(C.x,C.y,C.z)),h[E]=null):x in h||(h[x]={index0:c[b],index1:c[A],normal:Du.clone()})}}for(let _ in h)if(h[_]){let{index0:M,index1:m}=h[_];Cl.fromBufferAttribute(a,M),Rl.fromBufferAttribute(a,m),p.push(Cl.x,Cl.y,Cl.z),p.push(Rl.x,Rl.y,Rl.z)}this.setAttribute("position",new se(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ts=class e extends qr{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};var ha=class e extends qr{constructor(t=1,n=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}},ua=class e extends le{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=n/l,p=[],_=[],M=[],m=[];for(let f=0;f<u;f++){let b=f*h-o;for(let A=0;A<c;A++){let y=A*d-r;_.push(y,-b,0),M.push(0,0,1),m.push(A/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){let A=b+c*f,y=b+c*(f+1),w=b+1+c*(f+1),S=b+1+c*f;p.push(A,y,S),p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},da=class e extends le{constructor(t=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=t,h=(n-t)/s,p=new P,_=new Mt;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,u.push(_.x,_.y)}d+=h}for(let M=0;M<s;M++){let m=M*(i+1);for(let f=0;f<i;f++){let b=f+m,A=b,y=b+i+1,w=b+i+2,S=b+1;a.push(A,y,S),a.push(y,w,S)}}this.setIndex(a),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zr=class e extends le{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new P,h=new P,p=[],_=[],M=[],m=[];for(let f=0;f<=i;f++){let b=[],A=f/i,y=o+A*a,w=t*Math.cos(y),S=Math.sqrt(t*t-w*w),C=0;f===0&&o===0?C=.5/n:f===i&&l===Math.PI&&(C=-.5/n);for(let x=0;x<=n;x++){let E=x/n,I=s+E*r;d.x=-S*Math.cos(I),d.y=w,d.z=S*Math.sin(I),_.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),m.push(E+C,1-A),b.push(c++)}u.push(b)}for(let f=0;f<i;f++)for(let b=0;b<n;b++){let A=u[f][b+1],y=u[f][b],w=u[f+1][b],S=u[f+1][b+1];(f!==0||o>0)&&p.push(A,y,S),(f!==i-1||l<Math.PI)&&p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},fa=class e extends qr{constructor(t=1,n=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,n),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}};function $s(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(Op(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(Op(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function _n(e){let t={};for(let n=0;n<e.length;n++){let i=$s(e[n]);for(let s in i)t[s]=i[s]}return t}function Op(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function cx(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function cd(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Qs={clone:$s,merge:_n},hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=cx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[i].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ee().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},nc=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ic=class extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sc=class extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Il(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var bs=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],t<s)break e}o=n.length;break n}if(!(t>=r)){let a=n[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rc=class extends bs{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nu,endingEnd:Nu}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fu:r=t,a=2*n-i;break;case Ou:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fu:o=t,l=2*i-n;break;case Ou:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),M=_*_,m=M*_,f=-h*m+2*h*M-h*_,b=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*_+1,A=(-1-p)*m+(1.5+p)*M+.5*_,y=p*m-p*M;for(let w=0;w!==a;++w)r[w]=f*o[u+w]+b*o[c+w]+A*o[l+w]+y*o[d+w];return r}},oc=class extends bs{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-n)/(s-n),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},ac=class extends bs{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},lc=class extends bs{interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(i-n)/(s-n),M=1-_;for(let m=0;m!==a;++m)r[m]=o[c+m]*M+o[l+m]*_;return r}let h=a*2,p=t-1;for(let _=0;_!==a;++_){let M=o[c+_],m=o[l+_],f=p*h+_*2,b=d[f],A=d[f+1],y=t*h+_*2,w=u[y],S=u[y+1],C=(i-n)/(s-n),x,E,I,L,F;for(let j=0;j<8;j++){x=C*C,E=x*C,I=1-C,L=I*I,F=L*I;let O=F*n+3*L*C*b+3*I*x*w+E*s-i;if(Math.abs(O)<1e-10)break;let K=3*L*(b-n)+6*I*C*(w-b)+3*x*(s-w);if(Math.abs(K)<1e-10)break;C=C-O/K,C=Math.max(0,Math.min(1,C))}r[_]=F*M+3*L*C*A+3*I*x*S+E*m}return r}},kn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Il(n,this.TimeBufferType),this.values=Il(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Il(t.times,Array),values:Il(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new lc(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case qo:n=this.InterpolantFactoryMethodDiscrete;break;case ql:n=this.InterpolantFactoryMethodLinear;break;case Ul:n=this.InterpolantFactoryMethodSmooth;break;case Uu:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Lt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qo;case this.InterpolantFactoryMethodLinear:return ql;case this.InterpolantFactoryMethodSmooth:return Ul;case this.InterpolantFactoryMethodBezier:return Uu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ft("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ft("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&C1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ft("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ul,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let _=0;_!==i;++_){let M=n[d+_];if(M!==n[h+_]||M!==n[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=n.slice(0,o*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=ql;var Ss=class extends kn{constructor(t,n,i){super(t,n,i)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=qo;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends kn{constructor(t,n,i,s){super(t,n,i,s)}};cc.prototype.ValueTypeName="color";var hc=class extends kn{constructor(t,n,i,s){super(t,n,i,s)}};hc.prototype.ValueTypeName="number";var uc=class extends bs{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=t*a;for(let u=c+a;c!==u;c+=4)Bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},pa=class extends kn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new uc(this.times,this.values,this.getValueSize(),t)}};pa.prototype.ValueTypeName="quaternion";pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends kn{constructor(t,n,i){super(t,n,i)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=qo;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends kn{constructor(t,n,i,s){super(t,n,i,s)}};dc.prototype.ValueTypeName="vector";var fc=class{constructor(t,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Em=new fc,pc=class{constructor(t){this.manager=t!==void 0?t:Em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ll=new P,Dl=new Bn,Ai=new P,ma=class extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ll,Dl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ll,Dl,Ai.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Ll,Dl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ll,Dl,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gs=new P,Bp=new Mt,kp=new Mt,mn=class extends ma{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-t/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-t/gs.z)}getViewSize(t,n){return this.getViewBounds(t,Bp,kp),n.subVectors(kp,Bp)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var js=class extends ma{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Lr=-90,Dr=1,mc=class extends wn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Lr,Dr,t,n);s.layers=this.layers,this.add(s);let r=new mn(Lr,Dr,t,n);r.layers=this.layers,this.add(r);let o=new mn(Lr,Dr,t,n);o.layers=this.layers,this.add(o);let a=new mn(Lr,Dr,t,n);a.layers=this.layers,this.add(a);let l=new mn(Lr,Dr,t,n);l.layers=this.layers,this.add(l);let c=new mn(Lr,Dr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(d,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},gc=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ga=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=dx.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function dx(){this._document.hidden===!1&&this.reset()}var hd="\\[\\]\\.:\\/",fx=new RegExp("["+hd+"]","g"),ud="[^"+hd+"]",px="[^"+hd.replace("\\.","")+"]",mx=/((?:WC+[\/:])*)/.source.replace("WC",ud),gx=/(WCOD+)?/.source.replace("WCOD",px),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),vx=new RegExp("^"+mx+gx+_x+xx+"$"),yx=["material","materials","bones","map"],zu=class{constructor(t,n,i){let s=i||Me.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Me=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fx,"")}static parseTrackName(t){let n=vx.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);yx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=n.nodeName;Ft("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=zu;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u3=new Float32Array(1);var _a=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}},Ts=class{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Yt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Vu=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};var xa=class extends gi{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function dd(e,t,n,i){let s=Mx(i);switch(n){case id:return e*t;case rd:return e*t/s.components*s.byteLength;case Sc:return e*t/s.components*s.byteLength;case Is:return e*t*2/s.components*s.byteLength;case Ec:return e*t*2/s.components*s.byteLength;case sd:return e*t*3/s.components*s.byteLength;case si:return e*t*4/s.components*s.byteLength;case Tc:return e*t*4/s.components*s.byteLength;case Sa:case Ea:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ta:case wa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ac:case Rc:return Math.max(e,16)*Math.max(t,8)/4;case wc:case Cc:return Math.max(e,8)*Math.max(t,8)/2;case Pc:case Ic:case Dc:case Uc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Aa:case Nc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case kc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case zc:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case qc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Kc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case jc:case Jc:case $c:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Qc:case th:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ca:case eh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Mx(e){switch(e){case Vn:case Qu:return{byteLength:1,components:1};case jr:case td:case gn:return{byteLength:2,components:1};case Mc:case bc:return{byteLength:2,components:4};case xi:case yc:case vi:return{byteLength:4,components:1};case ed:case nd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Ym(){let e=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Sx(e){let t=new WeakMap;function n(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,a),d.length===0)e.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){let _=d[h],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,d[h]=M)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){let M=d[p];e.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",ev=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,gv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,my=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_y=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ty=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ly=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Ex,alphahash_pars_fragment:Tx,alphamap_fragment:wx,alphamap_pars_fragment:Ax,alphatest_fragment:Cx,alphatest_pars_fragment:Rx,aomap_fragment:Px,aomap_pars_fragment:Ix,batching_pars_vertex:Lx,batching_vertex:Dx,begin_vertex:Ux,beginnormal_vertex:Nx,bsdfs:Fx,iridescence_fragment:Ox,bumpmap_pars_fragment:Bx,clipping_planes_fragment:kx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Gx,color_fragment:Hx,color_pars_fragment:Wx,color_pars_vertex:Xx,color_vertex:qx,common:Yx,cube_uv_reflection_fragment:Zx,defaultnormal_vertex:Kx,displacementmap_pars_vertex:jx,displacementmap_vertex:Jx,emissivemap_fragment:$x,emissivemap_pars_fragment:Qx,colorspace_fragment:tv,colorspace_pars_fragment:ev,envmap_fragment:nv,envmap_common_pars_fragment:iv,envmap_pars_fragment:sv,envmap_pars_vertex:rv,envmap_physical_pars_fragment:gv,envmap_vertex:ov,fog_vertex:av,fog_pars_vertex:lv,fog_fragment:cv,fog_pars_fragment:hv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:dv,lights_lambert_fragment:fv,lights_lambert_pars_fragment:pv,lights_pars_begin:mv,lights_toon_fragment:_v,lights_toon_pars_fragment:xv,lights_phong_fragment:vv,lights_phong_pars_fragment:yv,lights_physical_fragment:Mv,lights_physical_pars_fragment:bv,lights_fragment_begin:Sv,lights_fragment_maps:Ev,lights_fragment_end:Tv,lightprobes_pars_fragment:wv,logdepthbuf_fragment:Av,logdepthbuf_pars_fragment:Cv,logdepthbuf_pars_vertex:Rv,logdepthbuf_vertex:Pv,map_fragment:Iv,map_pars_fragment:Lv,map_particle_fragment:Dv,map_particle_pars_fragment:Uv,metalnessmap_fragment:Nv,metalnessmap_pars_fragment:Fv,morphinstance_vertex:Ov,morphcolor_vertex:Bv,morphnormal_vertex:kv,morphtarget_pars_vertex:zv,morphtarget_vertex:Vv,normal_fragment_begin:Gv,normal_fragment_maps:Hv,normal_pars_fragment:Wv,normal_pars_vertex:Xv,normal_vertex:qv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:Zv,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:jv,iridescence_pars_fragment:Jv,opaque_fragment:$v,packing:Qv,premultiplied_alpha_fragment:ty,project_vertex:ey,dithering_fragment:ny,dithering_pars_fragment:iy,roughnessmap_fragment:sy,roughnessmap_pars_fragment:ry,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ay,shadowmap_vertex:ly,shadowmask_pars_fragment:cy,skinbase_vertex:hy,skinning_pars_vertex:uy,skinning_vertex:dy,skinnormal_vertex:fy,specularmap_fragment:py,specularmap_pars_fragment:my,tonemapping_fragment:gy,tonemapping_pars_fragment:_y,transmission_fragment:xy,transmission_pars_fragment:vy,uv_pars_fragment:yy,uv_pars_vertex:My,uv_vertex:by,worldpos_vertex:Sy,background_vert:Ey,background_frag:Ty,backgroundCube_vert:wy,backgroundCube_frag:Ay,cube_vert:Cy,cube_frag:Ry,depth_vert:Py,depth_frag:Iy,distance_vert:Ly,distance_frag:Dy,equirect_vert:Uy,equirect_frag:Ny,linedashed_vert:Fy,linedashed_frag:Oy,meshbasic_vert:By,meshbasic_frag:ky,meshlambert_vert:zy,meshlambert_frag:Vy,meshmatcap_vert:Gy,meshmatcap_frag:Hy,meshnormal_vert:Wy,meshnormal_frag:Xy,meshphong_vert:qy,meshphong_frag:Yy,meshphysical_vert:Zy,meshphysical_frag:Ky,meshtoon_vert:jy,meshtoon_frag:Jy,points_vert:$y,points_frag:Qy,shadow_vert:t2,shadow_frag:e2,sprite_vert:n2,sprite_frag:i2},mt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Di={basic:{uniforms:_n([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:_n([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:_n([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:_n([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:_n([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:_n([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:_n([mt.points,mt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:_n([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:_n([mt.common,mt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:_n([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:_n([mt.sprite,mt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:_n([mt.common,mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:_n([mt.lights,mt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Di.physical={uniforms:_n([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var sh={r:0,b:0,g:0},s2=new Ee,Zm=new kt;Zm.set(-1,0,0,0,1,0,0,0,1);function r2(e,t,n,i,s,r){let o=new zt(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function p(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let y=b.backgroundBlurriness>0;A=t.get(A,y)}return A}function _(b){let A=!1,y=p(b);y===null?m(o,a):y&&y.isColor&&(m(y,1),A=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(b,A){let y=p(A);y&&(y.isCubeTexture||y.mapping===Ma)?(c===void 0&&(c=new je(new Xr(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:$s(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(s2.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zm),c.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ae,(u!==y||d!==y.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=e.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new je(new ua(2,2),new ze({name:"BackgroundMaterial",uniforms:$s(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=e.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(sh,cd(e)),n.buffers.color.setClear(sh.r,sh.g,sh.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,A=1){o.set(b),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:_,addToRenderList:M,dispose:f}}function o2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(L,F,j,J,O){let K=!1,X=d(L,J,j,F);r!==X&&(r=X,c(r.object)),K=p(L,J,j,O),K&&_(L,J,j,O),O!==null&&t.update(O,e.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(L,F,j,J),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return e.createVertexArray()}function c(L){return e.bindVertexArray(L)}function u(L){return e.deleteVertexArray(L)}function d(L,F,j,J){let O=J.wireframe===!0,K=i[F.id];K===void 0&&(K={},i[F.id]=K);let X=L.isInstancedMesh===!0?L.id:0,nt=K[X];nt===void 0&&(nt={},K[X]=nt);let ot=nt[j.id];ot===void 0&&(ot={},nt[j.id]=ot);let ft=ot[O];return ft===void 0&&(ft=h(l()),ot[O]=ft),ft}function h(L){let F=[],j=[],J=[];for(let O=0;O<n;O++)F[O]=0,j[O]=0,J[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:J,object:L,attributes:{},index:null}}function p(L,F,j,J){let O=r.attributes,K=F.attributes,X=0,nt=j.getAttributes();for(let ot in nt)if(nt[ot].location>=0){let gt=O[ot],St=K[ot];if(St===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(St=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(St=L.instanceColor)),gt===void 0||gt.attribute!==St||St&&gt.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==J}function _(L,F,j,J){let O={},K=F.attributes,X=0,nt=j.getAttributes();for(let ot in nt)if(nt[ot].location>=0){let gt=K[ot];gt===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(gt=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(gt=L.instanceColor));let St={};St.attribute=gt,gt&&gt.data&&(St.data=gt.data),O[ot]=St,X++}r.attributes=O,r.attributesNum=X,r.index=J}function M(){let L=r.newAttributes;for(let F=0,j=L.length;F<j;F++)L[F]=0}function m(L){f(L,0)}function f(L,F){let j=r.newAttributes,J=r.enabledAttributes,O=r.attributeDivisors;j[L]=1,J[L]===0&&(e.enableVertexAttribArray(L),J[L]=1),O[L]!==F&&(e.vertexAttribDivisor(L,F),O[L]=F)}function b(){let L=r.newAttributes,F=r.enabledAttributes;for(let j=0,J=F.length;j<J;j++)F[j]!==L[j]&&(e.disableVertexAttribArray(j),F[j]=0)}function A(L,F,j,J,O,K,X){X===!0?e.vertexAttribIPointer(L,F,j,O,K):e.vertexAttribPointer(L,F,j,J,O,K)}function y(L,F,j,J){M();let O=J.attributes,K=j.getAttributes(),X=F.defaultAttributeValues;for(let nt in K){let ot=K[nt];if(ot.location>=0){let ft=O[nt];if(ft===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),ft!==void 0){let gt=ft.normalized,St=ft.itemSize,Kt=t.get(ft);if(Kt===void 0)continue;let _e=Kt.buffer,jt=Kt.type,tt=Kt.bytesPerElement,ut=jt===e.INT||jt===e.UNSIGNED_INT||ft.gpuType===yc;if(ft.isInterleavedBufferAttribute){let at=ft.data,Ot=at.stride,Bt=ft.offset;if(at.isInstancedInterleavedBuffer){for(let Ut=0;Ut<ot.locationSize;Ut++)f(ot.location+Ut,at.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ut=0;Ut<ot.locationSize;Ut++)m(ot.location+Ut);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let Ut=0;Ut<ot.locationSize;Ut++)A(ot.location+Ut,St/ot.locationSize,jt,gt,Ot*tt,(Bt+St/ot.locationSize*Ut)*tt,ut)}else{if(ft.isInstancedBufferAttribute){for(let at=0;at<ot.locationSize;at++)f(ot.location+at,ft.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let at=0;at<ot.locationSize;at++)m(ot.location+at);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let at=0;at<ot.locationSize;at++)A(ot.location+at,St/ot.locationSize,jt,gt,St*tt,St/ot.locationSize*at*tt,ut)}}else if(X!==void 0){let gt=X[nt];if(gt!==void 0)switch(gt.length){case 2:e.vertexAttrib2fv(ot.location,gt);break;case 3:e.vertexAttrib3fv(ot.location,gt);break;case 4:e.vertexAttrib4fv(ot.location,gt);break;default:e.vertexAttrib1fv(ot.location,gt)}}}}b()}function w(){E();for(let L in i){let F=i[L];for(let j in F){let J=F[j];for(let O in J){let K=J[O];for(let X in K)u(K[X].object),delete K[X];delete J[O]}}delete i[L]}}function S(L){if(i[L.id]===void 0)return;let F=i[L.id];for(let j in F){let J=F[j];for(let O in J){let K=J[O];for(let X in K)u(K[X].object),delete K[X];delete J[O]}}delete i[L.id]}function C(L){for(let F in i){let j=i[F];for(let J in j){let O=j[J];if(O[L.id]===void 0)continue;let K=O[L.id];for(let X in K)u(K[X].object),delete K[X];delete O[L.id]}}}function x(L){for(let F in i){let j=i[F],J=L.isInstancedMesh===!0?L.id:0,O=j[J];if(O!==void 0){for(let K in O){let X=O[K];for(let nt in X)u(X[nt].object),delete X[nt];delete O[K]}delete j[J],Object.keys(j).length===0&&delete i[F]}}}function E(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function a2(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(e.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function l2(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==si&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Vn&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vi&&!x)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(Lt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,maxSamples:w,samples:S}}function c2(e){let t=this,n=null,i=0,s=!1,r=!1,o=new ti,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){let _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let b=r?0:i,A=b*4,y=f.clippingState||null;l.value=y,y=u(_,h,A,p);for(let w=0;w!==A;++w)y[w]=n[w];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,_){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let f=p+M*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,y=p;A!==M;++A,y+=4)o.copy(d[A]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Ls=4,Tm=[.125,.215,.35,.446,.526,.582],tr=20,h2=256,Ra=new js,wm=new zt,fd=null,pd=0,md=0,gd=!1,u2=new P,oh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=u2}=r;fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fd,pd,md),this._renderer.xr.enabled=gd,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Cs||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:gn,format:si,colorSpace:Yo,depthBuffer:!1},s=Am(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(t,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=d2(r)),this._blurMaterial=p2(r,t,n),this._ggxMaterial=f2(r,t,n)}return s}_compileMaterial(t){let n=new je(new le,t);this._renderer.compile(n,Ra)}_sceneToCubeUV(t,n,i,s,r){let l=new mn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(wm),d.toneMapping=_i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new Xr,new ei({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(wm),f=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let w=this._cubeSize;Qr(s,y*w,A>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(M,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=b}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Cs||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Qr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ra)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-Ls?i-_+Ls:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-n,Qr(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(a,Ra),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Qr(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(a,Ra)}_blur(t,n,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*tr-1),M=r/_,m=isFinite(r)?1+Math.floor(u*M):tr;m>tr&&Lt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);let f=[],b=0;for(let C=0;C<tr;++C){let x=C/M,E=Math.exp(-x*x/2);f.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/b;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-i;let y=this._sizeLods[s],w=3*y*(s>A-Ls?s-A+Ls:0),S=4*(this._cubeSize-y);Qr(n,w,S,3*y,2*y),l.setRenderTarget(n),l.render(d,Ra)}};function d2(e){let t=[],n=[],i=[],s=e,r=e-Ls+1+Tm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>e-Ls?l=Tm[o-e+Ls-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,M=3,m=2,f=1,b=new Float32Array(M*_*p),A=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let S=0;S<p;S++){let C=S%3*2/3-1,x=S>2?0:-1,E=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];b.set(E,M*_*S),A.set(h,m*_*S);let I=[S,S,S,S,S,S];y.set(I,f*_*S)}let w=new le;w.setAttribute("position",new Rn(b,M)),w.setAttribute("uv",new Rn(A,m)),w.setAttribute("faceIndex",new Rn(y,f)),i.push(new je(w,null)),s>Ls&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Am(e,t,n){let i=new Ke(e,t,n);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function f2(e,t,n){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ch(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function p2(e,t,n){let i=new Float32Array(tr),s=new P(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Cm(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Rm(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ah=class extends Ke{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new aa(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xr(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:ii});r.uniforms.tEquirect.value=n;let o=new je(s,r),a=n.minFilter;return n.minFilter===Rs&&(n.minFilter=Ze),new mc(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}};function m2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===_c||p===xc)if(t.has(h)){let _=t.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let M=new ah(_.height);return M.fromEquirectangularTexture(e,h),t.set(h,M),h.addEventListener("dispose",c),a(M.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,_=p===_c||p===xc,M=p===Cs||p===Js;if(_||M){let m=n.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new oh(e)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return _&&b&&b.height>0||M&&b&&l(b)?(i===null&&(i=new oh(e)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===_c?h.mapping=Cs:p===xc&&(h.mapping=Js),h}function l(h){let p=0,_=6;for(let M=0;M<_;M++)h[M]!==void 0&&p++;return p===_}function c(h){let p=h.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function g2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ys("WebGLRenderer: "+i+" extension not supported."),s}}}function _2(e,t,n,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,_=d.attributes.position,M=0;if(_===void 0)return;if(p!==null){let b=p.array;M=p.version;for(let A=0,y=b.length;A<y;A+=3){let w=b[A+0],S=b[A+1],C=b[A+2];h.push(w,S,S,C,C,w)}}else{let b=_.array;M=_.version;for(let A=0,y=b.length/3-1;A<y;A+=3){let w=A+0,S=A+1,C=A+2;h.push(w,S,S,C,C,w)}}let m=new(_.count>=65535?na:ea)(h,1);m.version=M;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function x2(e,t,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){e.drawElements(i,h,r,d*o),n.update(h,i,1)}function c(d,h,p){p!==0&&(e.drawElementsInstanced(i,h,r,d*o,p),n.update(h,i,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=h[m];n.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function v2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:Ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function y2(e,t,n){let i=new WeakMap,s=new Ce;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),M===!0&&(A=3);let y=a.attributes.position.count*A,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*w*4*d),C=new $o(S,y,w,d);C.type=vi,C.needsUpdate=!0;let x=A*4;for(let I=0;I<d;I++){let L=m[I],F=f[I],j=b[I],J=y*w*4*I;for(let O=0;O<L.count;O++){let K=O*x;p===!0&&(s.fromBufferAttribute(L,O),S[J+K+0]=s.x,S[J+K+1]=s.y,S[J+K+2]=s.z,S[J+K+3]=0),_===!0&&(s.fromBufferAttribute(F,O),S[J+K+4]=s.x,S[J+K+5]=s.y,S[J+K+6]=s.z,S[J+K+7]=0),M===!0&&(s.fromBufferAttribute(j,O),S[J+K+8]=s.x,S[J+K+9]=s.y,S[J+K+10]=s.z,S[J+K+11]=j.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Mt(y,w)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function M2(e,t,n,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}var b2={[qu]:"LINEAR_TONE_MAPPING",[Yu]:"REINHARD_TONE_MAPPING",[Zu]:"CINEON_TONE_MAPPING",[ya]:"ACES_FILMIC_TONE_MAPPING",[ju]:"AGX_TONE_MAPPING",[Ju]:"NEUTRAL_TONE_MAPPING",[Ku]:"CUSTOM_TONE_MAPPING"};function S2(e,t,n,i,s,r){let o=new Ke(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Qi(t,n):void 0}),a=new Ke(t,n,{type:gn,depthBuffer:!1,stencilBuffer:!1}),l=new le;l.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new se([0,2,0,0,2,0],2));let c=new nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new je(l,c),d=new js(-1,1,1,-1,0,1),h=null,p=null,_=!1,M,m=null,f=[],b=!1;this.setSize=function(A,y){o.setSize(A,y),a.setSize(A,y);for(let w=0;w<f.length;w++){let S=f[w];S.setSize&&S.setSize(A,y)}},this.setEffects=function(A){f=A,b=f.length>0&&f[0].isRenderPass===!0;let y=o.width,w=o.height;for(let S=0;S<f.length;S++){let C=f[S];C.setSize&&C.setSize(y,w)}},this.begin=function(A,y){if(_||A.toneMapping===_i&&f.length===0)return!1;if(m=y,y!==null){let w=y.width,S=y.height;(o.width!==w||o.height!==S)&&this.setSize(w,S)}return b===!1&&A.setRenderTarget(o),M=A.toneMapping,A.toneMapping=_i,!0},this.hasRenderPass=function(){return b},this.end=function(A,y){A.toneMapping=M,_=!0;let w=o,S=a;for(let C=0;C<f.length;C++){let x=f[C];if(x.enabled!==!1&&(x.render(A,S,w,y),x.needsSwap!==!1)){let E=w;w=S,S=E}}if(h!==A.outputColorSpace||p!==A.toneMapping){h=A.outputColorSpace,p=A.toneMapping,c.defines={},Zt.getTransfer(h)===ae&&(c.defines.SRGB_TRANSFER="");let C=b2[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(m),A.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var Km=new Tn,vd=new Qi(1,1),jm=new $o,Jm=new jl,$m=new aa,Pm=[],Im=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Um=new Float32Array(4);function eo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Pm[s];if(r===void 0&&(r=new Float32Array(s),Pm[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function Je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function $e(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function hh(e,t){let n=Im[t];n===void 0&&(n=new Int32Array(t),Im[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function E2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function T2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2fv(this.addr,t),$e(n,t)}}function w2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Je(n,t))return;e.uniform3fv(this.addr,t),$e(n,t)}}function A2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4fv(this.addr,t),$e(n,t)}}function C2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$e(n,t)}else{if(Je(n,i))return;Um.set(i),e.uniformMatrix2fv(this.addr,!1,Um),$e(n,i)}}function R2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$e(n,t)}else{if(Je(n,i))return;Dm.set(i),e.uniformMatrix3fv(this.addr,!1,Dm),$e(n,i)}}function P2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$e(n,t)}else{if(Je(n,i))return;Lm.set(i),e.uniformMatrix4fv(this.addr,!1,Lm),$e(n,i)}}function I2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function L2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2iv(this.addr,t),$e(n,t)}}function D2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Je(n,t))return;e.uniform3iv(this.addr,t),$e(n,t)}}function U2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4iv(this.addr,t),$e(n,t)}}function N2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function F2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2uiv(this.addr,t),$e(n,t)}}function O2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Je(n,t))return;e.uniform3uiv(this.addr,t),$e(n,t)}}function B2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4uiv(this.addr,t),$e(n,t)}}function k2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(vd.compareFunction=n.isReversedDepthBuffer()?ih:nh,r=vd):r=Km,n.setTexture2D(t||r,s)}function z2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Jm,s)}function V2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||$m,s)}function G2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||jm,s)}function H2(e){switch(e){case 5126:return E2;case 35664:return T2;case 35665:return w2;case 35666:return A2;case 35674:return C2;case 35675:return R2;case 35676:return P2;case 5124:case 35670:return I2;case 35667:case 35671:return L2;case 35668:case 35672:return D2;case 35669:case 35673:return U2;case 5125:return N2;case 36294:return F2;case 36295:return O2;case 36296:return B2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return G2}}function W2(e,t){e.uniform1fv(this.addr,t)}function X2(e,t){let n=eo(t,this.size,2);e.uniform2fv(this.addr,n)}function q2(e,t){let n=eo(t,this.size,3);e.uniform3fv(this.addr,n)}function Y2(e,t){let n=eo(t,this.size,4);e.uniform4fv(this.addr,n)}function Z2(e,t){let n=eo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function K2(e,t){let n=eo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function j2(e,t){let n=eo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function J2(e,t){e.uniform1iv(this.addr,t)}function $2(e,t){e.uniform2iv(this.addr,t)}function Q2(e,t){e.uniform3iv(this.addr,t)}function tM(e,t){e.uniform4iv(this.addr,t)}function eM(e,t){e.uniform1uiv(this.addr,t)}function nM(e,t){e.uniform2uiv(this.addr,t)}function iM(e,t){e.uniform3uiv(this.addr,t)}function sM(e,t){e.uniform4uiv(this.addr,t)}function rM(e,t,n){let i=this.cache,s=t.length,r=hh(n,s);Je(i,r)||(e.uniform1iv(this.addr,r),$e(i,r));let o;this.type===e.SAMPLER_2D_SHADOW?o=vd:o=Km;for(let a=0;a!==s;++a)n.setTexture2D(t[a]||o,r[a])}function oM(e,t,n){let i=this.cache,s=t.length,r=hh(n,s);Je(i,r)||(e.uniform1iv(this.addr,r),$e(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||Jm,r[o])}function aM(e,t,n){let i=this.cache,s=t.length,r=hh(n,s);Je(i,r)||(e.uniform1iv(this.addr,r),$e(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||$m,r[o])}function lM(e,t,n){let i=this.cache,s=t.length,r=hh(n,s);Je(i,r)||(e.uniform1iv(this.addr,r),$e(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||jm,r[o])}function cM(e){switch(e){case 5126:return W2;case 35664:return X2;case 35665:return q2;case 35666:return Y2;case 35674:return Z2;case 35675:return K2;case 35676:return j2;case 5124:case 35670:return J2;case 35667:case 35671:return $2;case 35668:case 35672:return Q2;case 35669:case 35673:return tM;case 5125:return eM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}var yd=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=H2(n.type)}},Md=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cM(n.type)}},bd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,n[a.id],i)}}},_d=/(\w+)(\])?(\[|\.)?/g;function Nm(e,t){e.seq.push(t),e.map[t.id]=t}function hM(e,t,n){let i=e.name,s=i.length;for(_d.lastIndex=0;;){let r=_d.exec(i),o=_d.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nm(n,c===void 0?new yd(a,e,t):new Md(a,e,t));break}else{let d=n.map[a];d===void 0&&(d=new bd(a),Nm(n,d)),n=d}}}var to=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(n,o),l=t.getUniformLocation(n,a.name);hM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in n&&i.push(o)}return i}};function Fm(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var uM=37297,dM=0;function fM(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Om=new kt;function pM(e){Zt._getMatrix(Om,Zt.workingColorSpace,e);let t=`mat3( ${Om.elements.map(n=>n.toFixed(4))} )`;switch(Zt.getTransfer(e)){case Zo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Bm(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+fM(e.getShaderSource(t),a)}else return r}function mM(e,t){let n=pM(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var gM={[qu]:"Linear",[Yu]:"Reinhard",[Zu]:"Cineon",[ya]:"ACESFilmic",[ju]:"AgX",[Ju]:"Neutral",[Ku]:"Custom"};function _M(e,t){let n=gM[t];return n===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var rh=new P;function xM(){Zt.getLuminanceCoefficients(rh);let e=rh.x.toFixed(4),t=rh.y.toFixed(4),n=rh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vM(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function yM(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function MM(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),o=r.name,a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function Ia(e){return e!==""}function km(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(e){return e.replace(bM,EM)}var SM=new Map;function EM(e,t){let n=Gt[t];if(n===void 0){let i=SM.get(t);if(i!==void 0)n=Gt[i],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Sd(n)}var TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(e){return e.replace(TM,wM)}function wM(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gm(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var AM={[va]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function CM(e){return AM[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var RM={[Cs]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function PM(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":RM[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var IM={[Js]:"ENVMAP_MODE_REFRACTION"};function LM(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":IM[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DM={[Xu]:"ENVMAP_BLENDING_MULTIPLY",[am]:"ENVMAP_BLENDING_MIX",[lm]:"ENVMAP_BLENDING_ADD"};function UM(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":DM[e.combine]||"ENVMAP_BLENDING_NONE"}function NM(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function FM(e,t,n,i){let s=e.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=CM(n),c=PM(n),u=LM(n),d=UM(n),h=NM(n),p=vM(n),_=yM(r),M=s.createProgram(),m,f,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ia).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ia).join(`
`),f.length>0&&(f+=`
`)):(m=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),f=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?Gt.tonemapping_pars_fragment:"",n.toneMapping!==_i?_M("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,mM("linearToOutputTexel",n.outputColorSpace),xM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ia).join(`
`)),o=Sd(o),o=km(o,n),o=zm(o,n),a=Sd(a),a=km(a,n),a=zm(a,n),o=Vm(o),a=Vm(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=b+m+o,y=b+f+a,w=Fm(s,s.VERTEX_SHADER,A),S=Fm(s,s.FRAGMENT_SHADER,y);s.attachShader(M,w),s.attachShader(M,S),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(L){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(M)||"",j=s.getShaderInfoLog(w)||"",J=s.getShaderInfoLog(S)||"",O=F.trim(),K=j.trim(),X=J.trim(),nt=!0,ot=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(nt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,w,S);else{let ft=Bm(s,w,"vertex"),gt=Bm(s,S,"fragment");Ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+ft+`
`+gt)}else O!==""?Lt("WebGLProgram: Program Info Log:",O):(K===""||X==="")&&(ot=!1);ot&&(L.diagnostics={runnable:nt,programLog:O,vertexShader:{log:K,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(w),s.deleteShader(S),x=new to(s,M),E=MM(s,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,uM)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dM++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=S,this}var OM=0,Ed=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Td(t),n.set(t,i)),i}},Td=class{constructor(t){this.id=OM++,this.code=t,this.usedTimes=0}};function BM(e){return e===Is||e===Aa||e===Ca}function kM(e,t,n,i,s,r){let o=new Qo,a=new Ed,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,E,I,L,F,j){let J=L.fog,O=F.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||K,X),ot=nt&&nt.mapping===Ma?nt.image.height:null,ft=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Lt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let gt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,St=gt!==void 0?gt.length:0,Kt=0;O.morphAttributes.position!==void 0&&(Kt=1),O.morphAttributes.normal!==void 0&&(Kt=2),O.morphAttributes.color!==void 0&&(Kt=3);let _e,jt,tt,ut;if(ft){let yt=Di[ft];_e=yt.vertexShader,jt=yt.fragmentShader}else{_e=x.vertexShader,jt=x.fragmentShader;let yt=a.getVertexShaderStage(x),$t=a.getFragmentShaderStage(x);a.update(x,yt,$t),tt=yt.id,ut=$t.id}let at=e.getRenderTarget(),Ot=e.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,Ut=F.isBatchedMesh===!0,be=!!x.map,Ht=!!x.matcap,ie=!!nt,Jt=!!x.aoMap,Xt=!!x.lightMap,Se=!!x.bumpMap&&x.wireframe===!1,xe=!!x.normalMap,Ge=!!x.displacementMap,He=!!x.emissiveMap,ve=!!x.metalnessMap,ye=!!x.roughnessMap,D=x.anisotropy>0,Fe=x.clearcoat>0,qt=x.dispersion>0,T=x.iridescence>0,g=x.sheen>0,N=x.transmission>0,V=D&&!!x.anisotropyMap,q=Fe&&!!x.clearcoatMap,lt=Fe&&!!x.clearcoatNormalMap,dt=Fe&&!!x.clearcoatRoughnessMap,Y=T&&!!x.iridescenceMap,Q=T&&!!x.iridescenceThicknessMap,pt=g&&!!x.sheenColorMap,z=g&&!!x.sheenRoughnessMap,G=!!x.specularMap,Z=!!x.specularColorMap,et=!!x.specularIntensityMap,rt=N&&!!x.transmissionMap,ct=N&&!!x.thicknessMap,R=!!x.gradientMap,it=!!x.alphaMap,W=x.alphaTest>0,st=!!x.alphaHash,ht=!!x.extensions,$=_i;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&($=e.toneMapping);let xt={shaderID:ft,shaderType:x.type,shaderName:x.name,vertexShader:_e,fragmentShader:jt,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:ut,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ut,batchingColor:Ut&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,outputColorSpace:at===null?e.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:be,matcap:Ht,envMap:ie,envMapMode:ie&&nt.mapping,envMapCubeUVHeight:ot,aoMap:Jt,lightMap:Xt,bumpMap:Se,normalMap:xe,displacementMap:Ge,emissiveMap:He,normalMapObjectSpace:xe&&x.normalMapType===um,normalMapTangentSpace:xe&&x.normalMapType===od,packedNormalMap:xe&&x.normalMapType===od&&BM(x.normalMap.format),metalnessMap:ve,roughnessMap:ye,anisotropy:D,anisotropyMap:V,clearcoat:Fe,clearcoatMap:q,clearcoatNormalMap:lt,clearcoatRoughnessMap:dt,dispersion:qt,iridescence:T,iridescenceMap:Y,iridescenceThicknessMap:Q,sheen:g,sheenColorMap:pt,sheenRoughnessMap:z,specularMap:G,specularColorMap:Z,specularIntensityMap:et,transmission:N,transmissionMap:rt,thicknessMap:ct,gradientMap:R,opaque:x.transparent===!1&&x.blending===Zs&&x.alphaToCoverage===!1,alphaMap:it,alphaTest:W,alphaHash:st,combine:x.combine,mapUv:be&&_(x.map.channel),aoMapUv:Jt&&_(x.aoMap.channel),lightMapUv:Xt&&_(x.lightMap.channel),bumpMapUv:Se&&_(x.bumpMap.channel),normalMapUv:xe&&_(x.normalMap.channel),displacementMapUv:Ge&&_(x.displacementMap.channel),emissiveMapUv:He&&_(x.emissiveMap.channel),metalnessMapUv:ve&&_(x.metalnessMap.channel),roughnessMapUv:ye&&_(x.roughnessMap.channel),anisotropyMapUv:V&&_(x.anisotropyMap.channel),clearcoatMapUv:q&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:z&&_(x.sheenRoughnessMap.channel),specularMapUv:G&&_(x.specularMap.channel),specularColorMapUv:Z&&_(x.specularColorMap.channel),specularIntensityMapUv:et&&_(x.specularIntensityMap.channel),transmissionMapUv:rt&&_(x.transmissionMap.channel),thicknessMapUv:ct&&_(x.thicknessMap.channel),alphaMapUv:it&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||D),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(be||it),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ot,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Kt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:$,decodeVideoTexture:be&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:He&&x.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ni,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ht&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&x.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function m(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(f(E,x),b(E,x),E.push(e.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function f(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let E=p[x.type],I;if(E){let L=Di[E];I=Qs.clone(L.uniforms)}else I=x.uniforms;return I}function y(x,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new FM(e,E,x,s),c.push(I),u.set(E,I)),I}function w(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function C(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:C}}function zM(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function s(o,a,l){e.get(o)[a]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function VM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Hm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Wm(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,_,M,m,f){let b=e[t];return b===void 0?(b={id:h.id,object:h,geometry:p,material:_,materialVariant:o(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:f},e[t]=b):(b.id=h.id,b.object=h,b.geometry=p,b.material=_,b.materialVariant=o(h),b.groupOrder=M,b.renderOrder=h.renderOrder,b.z=m,b.group=f),t++,b}function l(h,p,_,M,m,f){let b=a(h,p,_,M,m,f);_.transmission>0?i.push(b):_.transparent===!0?s.push(b):n.push(b)}function c(h,p,_,M,m,f){let b=a(h,p,_,M,m,f);_.transmission>0?i.unshift(b):_.transparent===!0?s.unshift(b):n.unshift(b)}function u(h,p,_){n.length>1&&n.sort(h||VM),i.length>1&&i.sort(p||Hm),s.length>1&&s.sort(p||Hm),_&&(n.reverse(),i.reverse(),s.reverse())}function d(){for(let h=t,p=e.length;h<p;h++){let _=e[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function GM(){let e=new WeakMap;function t(i,s){let r=e.get(i),o;return r===void 0?(o=new Wm,e.set(i,[o])):s>=r.length?(o=new Wm,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function HM(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new zt};break;case"SpotLight":n={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":n={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function WM(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var XM=0;function qM(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function YM(e){let t=new HM,n=WM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Ee,o=new Ee;function a(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,M=0,m=0,f=0,b=0,A=0,y=0,w=0,S=0,C=0;c.sort(qM);for(let E=0,I=c.length;E<I;E++){let L=c[E],F=L.color,j=L.intensity,J=L.distance,O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Is?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=F.r*j,d+=F.g*j,h+=F.b*j;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],j);C++}else if(L.isDirectionalLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let X=L.shadow,nt=n.get(L);nt.shadowIntensity=X.intensity,nt.shadowBias=X.bias,nt.shadowNormalBias=X.normalBias,nt.shadowRadius=X.radius,nt.shadowMapSize=X.mapSize,i.directionalShadow[p]=nt,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=L.shadow.matrix,b++}i.directional[p]=K,p++}else if(L.isSpotLight){let K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(F).multiplyScalar(j),K.distance=J,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[M]=K;let X=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,X.updateMatrices(L),L.castShadow&&S++),i.spotLightMatrix[M]=X.matrix,L.castShadow){let nt=n.get(L);nt.shadowIntensity=X.intensity,nt.shadowBias=X.bias,nt.shadowNormalBias=X.normalBias,nt.shadowRadius=X.radius,nt.shadowMapSize=X.mapSize,i.spotShadow[M]=nt,i.spotShadowMap[M]=O,y++}M++}else if(L.isRectAreaLight){let K=t.get(L);K.color.copy(F).multiplyScalar(j),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let X=L.shadow,nt=n.get(L);nt.shadowIntensity=X.intensity,nt.shadowBias=X.bias,nt.shadowNormalBias=X.normalBias,nt.shadowRadius=X.radius,nt.shadowMapSize=X.mapSize,nt.shadowCameraNear=X.camera.near,nt.shadowCameraFar=X.camera.far,i.pointShadow[_]=nt,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=L.shadow.matrix,A++}i.point[_]=K,_++}else if(L.isHemisphereLight){let K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(j),K.groundColor.copy(L.groundColor).multiplyScalar(j),i.hemi[f]=K,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==b||x.numPointShadows!==A||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=C,x.directionalLength=p,x.pointLength=_,x.spotLength=M,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=b,x.numPointShadows=A,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=C,i.version=XM++)}function l(c,u){let d=0,h=0,p=0,_=0,M=0,m=u.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){let A=c[f];if(A.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(A.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let y=i.rectArea[_];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){let y=i.hemi[M];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function Xm(e){let t=new YM(e),n=[],i=[],s=[];function r(h){d.camera=h,n.length=0,i.length=0,s.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(n)}function u(h){t.setupView(n,h)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ZM(e){let t=new WeakMap;function n(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Xm(e),t.set(s,[a])):r>=o.length?(a=new Xm(e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JM=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],$M=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],qm=new Ee,Pa=new P,xd=new P;function QM(e,t,n){let i=new ra,s=new Mt,r=new Mt,o=new Ce,a=new ic,l=new sc,c={},u=n.maxTextureSize,d={[$i]:An,[An]:$i,[ni]:ni},h=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:KM,fragmentShader:jM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new le;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new je(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=va;let f=this.type;this.render=function(S,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Gp&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=va);let E=e.getRenderTarget(),I=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),F=e.state;F.setBlending(ii),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let j=f!==this.type;j&&C.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(O=>O.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,O=S.length;J<O;J++){let K=S[J],X=K.shadow;if(X===void 0){Lt("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let nt=X.getFrameExtents();s.multiply(nt),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,X.mapSize.y=r.y));let ot=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ot,X.map===null||j===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Kr){if(K.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ke(s.x,s.y,{format:Is,type:gn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new Qi(s.x,s.y,vi),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=Pi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=an,X.map.depthTexture.magFilter=an}else K.isPointLight?(X.map=new ah(s.x),X.map.depthTexture=new ec(s.x,xi)):(X.map=new Ke(s.x,s.y),X.map.depthTexture=new Qi(s.x,s.y,xi)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=Pi,this.type===va?(X.map.depthTexture.compareFunction=ot?ih:nh,X.map.depthTexture.minFilter=Ze,X.map.depthTexture.magFilter=Ze):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=an,X.map.depthTexture.magFilter=an);X.camera.updateProjectionMatrix()}let ft=X.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<ft;gt++){if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,gt),e.clear();else{gt===0&&(e.setRenderTarget(X.map),e.clear());let St=X.getViewport(gt);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),F.viewport(o)}if(K.isPointLight){let St=X.camera,Kt=X.matrix,_e=K.distance||St.far;_e!==St.far&&(St.far=_e,St.updateProjectionMatrix()),Pa.setFromMatrixPosition(K.matrixWorld),St.position.copy(Pa),xd.copy(St.position),xd.add(JM[gt]),St.up.copy($M[gt]),St.lookAt(xd),St.updateMatrixWorld(),Kt.makeTranslation(-Pa.x,-Pa.y,-Pa.z),qm.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),X._frustum.setFromProjectionMatrix(qm,St.coordinateSystem,St.reversedDepth)}else X.updateMatrices(K);i=X.getFrustum(),y(C,x,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===Kr&&b(X,x),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(E,I,L)};function b(S,C){let x=t.update(M);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ke(s.x,s.y,{format:Is,type:gn})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,e.setRenderTarget(S.mapPass),e.clear(),e.renderBufferDirect(C,null,x,h,M,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,e.setRenderTarget(S.map),e.clear(),e.renderBufferDirect(C,null,x,p,M,null)}function A(S,C,x,E){let I=null,L=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)I=L;else if(I=x.isPointLight===!0?l:a,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=I.uuid,j=C.uuid,J=c[F];J===void 0&&(J={},c[F]=J);let O=J[j];O===void 0&&(O=I.clone(),J[j]=O,C.addEventListener("dispose",w)),I=O}if(I.visible=C.visible,I.wireframe=C.wireframe,E===Kr?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=e.properties.get(I);F.light=x}return I}function y(S,C,x,E,I){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Kr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let j=t.update(S),J=S.material;if(Array.isArray(J)){let O=j.groups;for(let K=0,X=O.length;K<X;K++){let nt=O[K],ot=J[nt.materialIndex];if(ot&&ot.visible){let ft=A(S,ot,E,I);S.onBeforeShadow(e,S,C,x,j,ft,nt),e.renderBufferDirect(x,null,j,ft,S,nt),S.onAfterShadow(e,S,C,x,j,ft,nt)}}}else if(J.visible){let O=A(S,J,E,I);S.onBeforeShadow(e,S,C,x,j,O,null),e.renderBufferDirect(x,null,j,O,S,null),S.onAfterShadow(e,S,C,x,j,O,null)}}let F=S.children;for(let j=0,J=F.length;j<J;j++)y(F[j],C,x,E,I)}function w(S){S.target.removeEventListener("dispose",w);for(let x in c){let E=c[x],I=S.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function tb(e,t){function n(){let R=!1,it=new Ce,W=null,st=new Ce(0,0,0,0);return{setMask:function(ht){W!==ht&&!R&&(e.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){R=ht},setClear:function(ht,$,xt,yt,$t){$t===!0&&(ht*=yt,$*=yt,xt*=yt),it.set(ht,$,xt,yt),st.equals(it)===!1&&(e.clearColor(ht,$,xt,yt),st.copy(it))},reset:function(){R=!1,W=null,st.set(-1,0,0,0)}}}function i(){let R=!1,it=!1,W=null,st=null,ht=null;return{setReversed:function($){if(it!==$){let xt=t.get("EXT_clip_control");$?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),it=$;let yt=ht;ht=null,this.setClear(yt)}},getReversed:function(){return it},setTest:function($){$?at(e.DEPTH_TEST):Ot(e.DEPTH_TEST)},setMask:function($){W!==$&&!R&&(e.depthMask($),W=$)},setFunc:function($){if(it&&($=Mm[$]),st!==$){switch($){case Ol:e.depthFunc(e.NEVER);break;case Bl:e.depthFunc(e.ALWAYS);break;case kl:e.depthFunc(e.LESS);break;case Ks:e.depthFunc(e.LEQUAL);break;case zl:e.depthFunc(e.EQUAL);break;case Vl:e.depthFunc(e.GEQUAL);break;case Gl:e.depthFunc(e.GREATER);break;case Hl:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}st=$}},setLocked:function($){R=$},setClear:function($){ht!==$&&(ht=$,it&&($=1-$),e.clearDepth($))},reset:function(){R=!1,W=null,st=null,ht=null,it=!1}}}function s(){let R=!1,it=null,W=null,st=null,ht=null,$=null,xt=null,yt=null,$t=null;return{setTest:function(Qt){R||(Qt?at(e.STENCIL_TEST):Ot(e.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!R&&(e.stencilMask(Qt),it=Qt)},setFunc:function(Qt,Oe,Ti){(W!==Qt||st!==Oe||ht!==Ti)&&(e.stencilFunc(Qt,Oe,Ti),W=Qt,st=Oe,ht=Ti)},setOp:function(Qt,Oe,Ti){($!==Qt||xt!==Oe||yt!==Ti)&&(e.stencilOp(Qt,Oe,Ti),$=Qt,xt=Oe,yt=Ti)},setLocked:function(Qt){R=Qt},setClear:function(Qt){$t!==Qt&&(e.clearStencil(Qt),$t=Qt)},reset:function(){R=!1,it=null,W=null,st=null,ht=null,$=null,xt=null,yt=null,$t=null}}}let r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,_=[],M=null,m=!1,f=null,b=null,A=null,y=null,w=null,S=null,C=null,x=new zt(0,0,0),E=0,I=!1,L=null,F=null,j=null,J=null,O=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,ot=e.getParameter(e.VERSION);ot.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(ot)[1]),X=nt>=1):ot.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),X=nt>=2);let ft=null,gt={},St=e.getParameter(e.SCISSOR_BOX),Kt=e.getParameter(e.VIEWPORT),_e=new Ce().fromArray(St),jt=new Ce().fromArray(Kt);function tt(R,it,W,st){let ht=new Uint8Array(4),$=e.createTexture();e.bindTexture(R,$),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let xt=0;xt<W;xt++)R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY?e.texImage3D(it,0,e.RGBA,1,1,st,0,e.RGBA,e.UNSIGNED_BYTE,ht):e.texImage2D(it+xt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ht);return $}let ut={};ut[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),ut[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ut[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(e.DEPTH_TEST),o.setFunc(Ks),Se(!1),xe(Gu),at(e.CULL_FACE),Jt(ii);function at(R){u[R]!==!0&&(e.enable(R),u[R]=!0)}function Ot(R){u[R]!==!1&&(e.disable(R),u[R]=!1)}function Bt(R,it){return h[R]!==it?(e.bindFramebuffer(R,it),h[R]=it,R===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=it),R===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=it),!0):!1}function Ut(R,it){let W=_,st=!1;if(R){W=p.get(it),W===void 0&&(W=[],p.set(it,W));let ht=R.textures;if(W.length!==ht.length||W[0]!==e.COLOR_ATTACHMENT0){for(let $=0,xt=ht.length;$<xt;$++)W[$]=e.COLOR_ATTACHMENT0+$;W.length=ht.length,st=!0}}else W[0]!==e.BACK&&(W[0]=e.BACK,st=!0);st&&e.drawBuffers(W)}function be(R){return M!==R?(e.useProgram(R),M=R,!0):!1}let Ht={[_s]:e.FUNC_ADD,[Wp]:e.FUNC_SUBTRACT,[Xp]:e.FUNC_REVERSE_SUBTRACT};Ht[qp]=e.MIN,Ht[Yp]=e.MAX;let ie={[Zp]:e.ZERO,[Kp]:e.ONE,[jp]:e.SRC_COLOR,[Nl]:e.SRC_ALPHA,[nm]:e.SRC_ALPHA_SATURATE,[tm]:e.DST_COLOR,[$p]:e.DST_ALPHA,[Jp]:e.ONE_MINUS_SRC_COLOR,[Fl]:e.ONE_MINUS_SRC_ALPHA,[em]:e.ONE_MINUS_DST_COLOR,[Qp]:e.ONE_MINUS_DST_ALPHA,[im]:e.CONSTANT_COLOR,[sm]:e.ONE_MINUS_CONSTANT_COLOR,[rm]:e.CONSTANT_ALPHA,[om]:e.ONE_MINUS_CONSTANT_ALPHA};function Jt(R,it,W,st,ht,$,xt,yt,$t,Qt){if(R===ii){m===!0&&(Ot(e.BLEND),m=!1);return}if(m===!1&&(at(e.BLEND),m=!0),R!==Hp){if(R!==f||Qt!==I){if((b!==_s||w!==_s)&&(e.blendEquation(e.FUNC_ADD),b=_s,w=_s),Qt)switch(R){case Zs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case zn:e.blendFunc(e.ONE,e.ONE);break;case Hu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Wu:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ft("WebGLState: Invalid blending: ",R);break}else switch(R){case Zs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case zn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Hu:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wu:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",R);break}A=null,y=null,S=null,C=null,x.set(0,0,0),E=0,f=R,I=Qt}return}ht=ht||it,$=$||W,xt=xt||st,(it!==b||ht!==w)&&(e.blendEquationSeparate(Ht[it],Ht[ht]),b=it,w=ht),(W!==A||st!==y||$!==S||xt!==C)&&(e.blendFuncSeparate(ie[W],ie[st],ie[$],ie[xt]),A=W,y=st,S=$,C=xt),(yt.equals(x)===!1||$t!==E)&&(e.blendColor(yt.r,yt.g,yt.b,$t),x.copy(yt),E=$t),f=R,I=!1}function Xt(R,it){R.side===ni?Ot(e.CULL_FACE):at(e.CULL_FACE);let W=R.side===An;it&&(W=!W),Se(W),R.blending===Zs&&R.transparent===!1?Jt(ii):Jt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let st=R.stencilWrite;a.setTest(st),st&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),He(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?at(e.SAMPLE_ALPHA_TO_COVERAGE):Ot(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(R){L!==R&&(R?e.frontFace(e.CW):e.frontFace(e.CCW),L=R)}function xe(R){R!==zp?(at(e.CULL_FACE),R!==F&&(R===Gu?e.cullFace(e.BACK):R===Vp?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ot(e.CULL_FACE),F=R}function Ge(R){R!==j&&(X&&e.lineWidth(R),j=R)}function He(R,it,W){R?(at(e.POLYGON_OFFSET_FILL),(J!==it||O!==W)&&(J=it,O=W,o.getReversed()&&(it=-it),e.polygonOffset(it,W))):Ot(e.POLYGON_OFFSET_FILL)}function ve(R){R?at(e.SCISSOR_TEST):Ot(e.SCISSOR_TEST)}function ye(R){R===void 0&&(R=e.TEXTURE0+K-1),ft!==R&&(e.activeTexture(R),ft=R)}function D(R,it,W){W===void 0&&(ft===null?W=e.TEXTURE0+K-1:W=ft);let st=gt[W];st===void 0&&(st={type:void 0,texture:void 0},gt[W]=st),(st.type!==R||st.texture!==it)&&(ft!==W&&(e.activeTexture(W),ft=W),e.bindTexture(R,it||ut[R]),st.type=R,st.texture=it)}function Fe(){let R=gt[ft];R!==void 0&&R.type!==void 0&&(e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function qt(){try{e.compressedTexImage2D(...arguments)}catch(R){Ft("WebGLState:",R)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(R){Ft("WebGLState:",R)}}function g(){try{e.texSubImage2D(...arguments)}catch(R){Ft("WebGLState:",R)}}function N(){try{e.texSubImage3D(...arguments)}catch(R){Ft("WebGLState:",R)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(R){Ft("WebGLState:",R)}}function q(){try{e.compressedTexSubImage3D(...arguments)}catch(R){Ft("WebGLState:",R)}}function lt(){try{e.texStorage2D(...arguments)}catch(R){Ft("WebGLState:",R)}}function dt(){try{e.texStorage3D(...arguments)}catch(R){Ft("WebGLState:",R)}}function Y(){try{e.texImage2D(...arguments)}catch(R){Ft("WebGLState:",R)}}function Q(){try{e.texImage3D(...arguments)}catch(R){Ft("WebGLState:",R)}}function pt(R){return d[R]!==void 0?d[R]:e.getParameter(R)}function z(R,it){d[R]!==it&&(e.pixelStorei(R,it),d[R]=it)}function G(R){_e.equals(R)===!1&&(e.scissor(R.x,R.y,R.z,R.w),_e.copy(R))}function Z(R){jt.equals(R)===!1&&(e.viewport(R.x,R.y,R.z,R.w),jt.copy(R))}function et(R,it){let W=c.get(it);W===void 0&&(W=new WeakMap,c.set(it,W));let st=W.get(R);st===void 0&&(st=e.getUniformBlockIndex(it,R.name),W.set(R,st))}function rt(R,it){let st=c.get(it).get(R);l.get(it)!==st&&(e.uniformBlockBinding(it,st,R.__bindingPointIndex),l.set(it,st))}function ct(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ft=null,gt={},h={},p=new WeakMap,_=[],M=null,m=!1,f=null,b=null,A=null,y=null,w=null,S=null,C=null,x=new zt(0,0,0),E=0,I=!1,L=null,F=null,j=null,J=null,O=null,_e.set(0,0,e.canvas.width,e.canvas.height),jt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Ot,bindFramebuffer:Bt,drawBuffers:Ut,useProgram:be,setBlending:Jt,setMaterial:Xt,setFlipSided:Se,setCullFace:xe,setLineWidth:Ge,setPolygonOffset:He,setScissorTest:ve,activeTexture:ye,bindTexture:D,unbindTexture:Fe,compressedTexImage2D:qt,compressedTexImage3D:T,texImage2D:Y,texImage3D:Q,pixelStorei:z,getParameter:pt,updateUBOMapping:et,uniformBlockBinding:rt,texStorage2D:lt,texStorage3D:dt,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:G,viewport:Z,reset:ct}}function eb(e,t,n,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap,d=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,g){return _?new OffscreenCanvas(T,g):jo("canvas")}function m(T,g,N){let V=1,q=qt(T);if((q.width>N||q.height>N)&&(V=N/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let lt=Math.floor(V*q.width),dt=Math.floor(V*q.height);h===void 0&&(h=M(lt,dt));let Y=g?M(lt,dt):h;return Y.width=lt,Y.height=dt,Y.getContext("2d").drawImage(T,0,0,lt,dt),Lt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+lt+"x"+dt+")."),Y}else return"data"in T&&Lt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function f(T){return T.generateMipmaps}function b(T){e.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(T,g,N,V,q,lt=!1){if(T!==null){if(e[T]!==void 0)return e[T];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let dt;V&&(dt=t.get("EXT_texture_norm16"),dt||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=g;if(g===e.RED&&(N===e.FLOAT&&(Y=e.R32F),N===e.HALF_FLOAT&&(Y=e.R16F),N===e.UNSIGNED_BYTE&&(Y=e.R8),N===e.UNSIGNED_SHORT&&dt&&(Y=dt.R16_EXT),N===e.SHORT&&dt&&(Y=dt.R16_SNORM_EXT)),g===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(Y=e.R8UI),N===e.UNSIGNED_SHORT&&(Y=e.R16UI),N===e.UNSIGNED_INT&&(Y=e.R32UI),N===e.BYTE&&(Y=e.R8I),N===e.SHORT&&(Y=e.R16I),N===e.INT&&(Y=e.R32I)),g===e.RG&&(N===e.FLOAT&&(Y=e.RG32F),N===e.HALF_FLOAT&&(Y=e.RG16F),N===e.UNSIGNED_BYTE&&(Y=e.RG8),N===e.UNSIGNED_SHORT&&dt&&(Y=dt.RG16_EXT),N===e.SHORT&&dt&&(Y=dt.RG16_SNORM_EXT)),g===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(Y=e.RG8UI),N===e.UNSIGNED_SHORT&&(Y=e.RG16UI),N===e.UNSIGNED_INT&&(Y=e.RG32UI),N===e.BYTE&&(Y=e.RG8I),N===e.SHORT&&(Y=e.RG16I),N===e.INT&&(Y=e.RG32I)),g===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),N===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),N===e.UNSIGNED_INT&&(Y=e.RGB32UI),N===e.BYTE&&(Y=e.RGB8I),N===e.SHORT&&(Y=e.RGB16I),N===e.INT&&(Y=e.RGB32I)),g===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),N===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),N===e.UNSIGNED_INT&&(Y=e.RGBA32UI),N===e.BYTE&&(Y=e.RGBA8I),N===e.SHORT&&(Y=e.RGBA16I),N===e.INT&&(Y=e.RGBA32I)),g===e.RGB&&(N===e.UNSIGNED_SHORT&&dt&&(Y=dt.RGB16_EXT),N===e.SHORT&&dt&&(Y=dt.RGB16_SNORM_EXT),N===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),N===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),g===e.RGBA){let Q=lt?Zo:Zt.getTransfer(q);N===e.FLOAT&&(Y=e.RGBA32F),N===e.HALF_FLOAT&&(Y=e.RGBA16F),N===e.UNSIGNED_BYTE&&(Y=Q===ae?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT&&dt&&(Y=dt.RGBA16_EXT),N===e.SHORT&&dt&&(Y=dt.RGBA16_SNORM_EXT),N===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function w(T,g){let N;return T?g===null||g===xi||g===Jr?N=e.DEPTH24_STENCIL8:g===vi?N=e.DEPTH32F_STENCIL8:g===jr&&(N=e.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xi||g===Jr?N=e.DEPTH_COMPONENT24:g===vi?N=e.DEPTH_COMPONENT32F:g===jr&&(N=e.DEPTH_COMPONENT16),N}function S(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==an&&T.minFilter!==Ze?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function C(T){let g=T.target;g.removeEventListener("dispose",C),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(T){let g=T.target;g.removeEventListener("dispose",x),L(g)}function E(T){let g=i.get(T);if(g.__webglInit===void 0)return;let N=T.source,V=p.get(N);if(V){let q=V[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&I(T),Object.keys(V).length===0&&p.delete(N)}i.remove(T)}function I(T){let g=i.get(T);e.deleteTexture(g.__webglTexture);let N=T.source,V=p.get(N);delete V[g.__cacheKey],o.memory.textures--}function L(T){let g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let q=0;q<g.__webglFramebuffer[V].length;q++)e.deleteFramebuffer(g.__webglFramebuffer[V][q]);else e.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)e.deleteFramebuffer(g.__webglFramebuffer[V]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=T.textures;for(let V=0,q=N.length;V<q;V++){let lt=i.get(N[V]);lt.__webglTexture&&(e.deleteTexture(lt.__webglTexture),o.memory.textures--),i.remove(N[V])}i.remove(T)}let F=0;function j(){F=0}function J(){return F}function O(T){F=T}function K(){let T=F;return T>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),F+=1,T}function X(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function nt(T,g){let N=i.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){let V=T.image;if(V===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(N,T,g);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+g)}function ot(T,g){let N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Ot(N,T,g);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+g)}function ft(T,g){let N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){Ot(N,T,g);return}n.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+g)}function gt(T,g){let N=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){Bt(N,T,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+g)}let St={[Wl]:e.REPEAT,[Ri]:e.CLAMP_TO_EDGE,[Xl]:e.MIRRORED_REPEAT},Kt={[an]:e.NEAREST,[cm]:e.NEAREST_MIPMAP_NEAREST,[ba]:e.NEAREST_MIPMAP_LINEAR,[Ze]:e.LINEAR,[vc]:e.LINEAR_MIPMAP_NEAREST,[Rs]:e.LINEAR_MIPMAP_LINEAR},_e={[dm]:e.NEVER,[_m]:e.ALWAYS,[fm]:e.LESS,[nh]:e.LEQUAL,[pm]:e.EQUAL,[ih]:e.GEQUAL,[mm]:e.GREATER,[gm]:e.NOTEQUAL};function jt(T,g){if(g.type===vi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ze||g.magFilter===vc||g.magFilter===ba||g.magFilter===Rs||g.minFilter===Ze||g.minFilter===vc||g.minFilter===ba||g.minFilter===Rs)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,St[g.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,St[g.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,St[g.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Kt[g.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Kt[g.minFilter]),g.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===an||g.minFilter!==ba&&g.minFilter!==Rs||g.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function tt(T,g){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",C));let V=g.source,q=p.get(V);q===void 0&&(q={},p.set(V,q));let lt=X(g);if(lt!==T.__cacheKey){q[lt]===void 0&&(q[lt]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,N=!0),q[lt].usedTimes++;let dt=q[T.__cacheKey];dt!==void 0&&(q[T.__cacheKey].usedTimes--,dt.usedTimes===0&&I(g)),T.__cacheKey=lt,T.__webglTexture=q[lt].texture}return N}function ut(T,g,N){return Math.floor(Math.floor(T/N)/g)}function at(T,g,N,V){let lt=T.updateRanges;if(lt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,g.width,g.height,N,V,g.data);else{lt.sort((z,G)=>z.start-G.start);let dt=0;for(let z=1;z<lt.length;z++){let G=lt[dt],Z=lt[z],et=G.start+G.count,rt=ut(Z.start,g.width,4),ct=ut(G.start,g.width,4);Z.start<=et+1&&rt===ct&&ut(Z.start+Z.count-1,g.width,4)===rt?G.count=Math.max(G.count,Z.start+Z.count-G.start):(++dt,lt[dt]=Z)}lt.length=dt+1;let Y=n.getParameter(e.UNPACK_ROW_LENGTH),Q=n.getParameter(e.UNPACK_SKIP_PIXELS),pt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,g.width);for(let z=0,G=lt.length;z<G;z++){let Z=lt[z],et=Math.floor(Z.start/4),rt=Math.ceil(Z.count/4),ct=et%g.width,R=Math.floor(et/g.width),it=rt,W=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ct),n.pixelStorei(e.UNPACK_SKIP_ROWS,R),n.texSubImage2D(e.TEXTURE_2D,0,ct,R,it,W,N,V,g.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Y),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(e.UNPACK_SKIP_ROWS,pt)}}function Ot(T,g,N){let V=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=e.TEXTURE_3D);let q=tt(T,g),lt=g.source;n.bindTexture(V,T.__webglTexture,e.TEXTURE0+N);let dt=i.get(lt);if(lt.version!==dt.__version||q===!0){if(n.activeTexture(e.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let W=Zt.getPrimaries(Zt.workingColorSpace),st=g.colorSpace===es?null:Zt.getPrimaries(g.colorSpace),ht=g.colorSpace===es||W===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,s.maxTextureSize);Q=Fe(g,Q);let pt=r.convert(g.format,g.colorSpace),z=r.convert(g.type),G=y(g.internalFormat,pt,z,g.normalized,g.colorSpace,g.isVideoTexture);jt(V,g);let Z,et=g.mipmaps,rt=g.isVideoTexture!==!0,ct=dt.__version===void 0||q===!0,R=lt.dataReady,it=S(g,Q);if(g.isDepthTexture)G=w(g.format===Ps,g.type),ct&&(rt?n.texStorage2D(e.TEXTURE_2D,1,G,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,G,Q.width,Q.height,0,pt,z,null));else if(g.isDataTexture)if(et.length>0){rt&&ct&&n.texStorage2D(e.TEXTURE_2D,it,G,et[0].width,et[0].height);for(let W=0,st=et.length;W<st;W++)Z=et[W],rt?R&&n.texSubImage2D(e.TEXTURE_2D,W,0,0,Z.width,Z.height,pt,z,Z.data):n.texImage2D(e.TEXTURE_2D,W,G,Z.width,Z.height,0,pt,z,Z.data);g.generateMipmaps=!1}else rt?(ct&&n.texStorage2D(e.TEXTURE_2D,it,G,Q.width,Q.height),R&&at(g,Q,pt,z)):n.texImage2D(e.TEXTURE_2D,0,G,Q.width,Q.height,0,pt,z,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){rt&&ct&&n.texStorage3D(e.TEXTURE_2D_ARRAY,it,G,et[0].width,et[0].height,Q.depth);for(let W=0,st=et.length;W<st;W++)if(Z=et[W],g.format!==si)if(pt!==null)if(rt){if(R)if(g.layerUpdates.size>0){let ht=dd(Z.width,Z.height,g.format,g.type);for(let $ of g.layerUpdates){let xt=Z.data.subarray($*ht/Z.data.BYTES_PER_ELEMENT,($+1)*ht/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,$,Z.width,Z.height,1,pt,xt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,Z.width,Z.height,Q.depth,pt,Z.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,W,G,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?R&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,Z.width,Z.height,Q.depth,pt,z,Z.data):n.texImage3D(e.TEXTURE_2D_ARRAY,W,G,Z.width,Z.height,Q.depth,0,pt,z,Z.data)}else{rt&&ct&&n.texStorage2D(e.TEXTURE_2D,it,G,et[0].width,et[0].height);for(let W=0,st=et.length;W<st;W++)Z=et[W],g.format!==si?pt!==null?rt?R&&n.compressedTexSubImage2D(e.TEXTURE_2D,W,0,0,Z.width,Z.height,pt,Z.data):n.compressedTexImage2D(e.TEXTURE_2D,W,G,Z.width,Z.height,0,Z.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?R&&n.texSubImage2D(e.TEXTURE_2D,W,0,0,Z.width,Z.height,pt,z,Z.data):n.texImage2D(e.TEXTURE_2D,W,G,Z.width,Z.height,0,pt,z,Z.data)}else if(g.isDataArrayTexture)if(rt){if(ct&&n.texStorage3D(e.TEXTURE_2D_ARRAY,it,G,Q.width,Q.height,Q.depth),R)if(g.layerUpdates.size>0){let W=dd(Q.width,Q.height,g.format,g.type);for(let st of g.layerUpdates){let ht=Q.data.subarray(st*W/Q.data.BYTES_PER_ELEMENT,(st+1)*W/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,st,Q.width,Q.height,1,pt,z,ht)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,z,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,G,Q.width,Q.height,Q.depth,0,pt,z,Q.data);else if(g.isData3DTexture)rt?(ct&&n.texStorage3D(e.TEXTURE_3D,it,G,Q.width,Q.height,Q.depth),R&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,z,Q.data)):n.texImage3D(e.TEXTURE_3D,0,G,Q.width,Q.height,Q.depth,0,pt,z,Q.data);else if(g.isFramebufferTexture){if(ct)if(rt)n.texStorage2D(e.TEXTURE_2D,it,G,Q.width,Q.height);else{let W=Q.width,st=Q.height;for(let ht=0;ht<it;ht++)n.texImage2D(e.TEXTURE_2D,ht,G,W,st,0,pt,z,null),W>>=1,st>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in e){let W=e.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),Q.parentNode!==W){W.appendChild(Q),d.add(g),W.onpaint=st=>{let ht=st.changedElements;for(let $ of d)ht.includes($.image)&&($.needsUpdate=!0)},W.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Q);else{let ht=e.RGBA,$=e.RGBA,xt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ht,$,xt,Q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(et.length>0){if(rt&&ct){let W=qt(et[0]);n.texStorage2D(e.TEXTURE_2D,it,G,W.width,W.height)}for(let W=0,st=et.length;W<st;W++)Z=et[W],rt?R&&n.texSubImage2D(e.TEXTURE_2D,W,0,0,pt,z,Z):n.texImage2D(e.TEXTURE_2D,W,G,pt,z,Z);g.generateMipmaps=!1}else if(rt){if(ct){let W=qt(Q);n.texStorage2D(e.TEXTURE_2D,it,G,W.width,W.height)}R&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,pt,z,Q)}else n.texImage2D(e.TEXTURE_2D,0,G,pt,z,Q);f(g)&&b(V),dt.__version=lt.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Bt(T,g,N){if(g.image.length!==6)return;let V=tt(T,g),q=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+N);let lt=i.get(q);if(q.version!==lt.__version||V===!0){n.activeTexture(e.TEXTURE0+N);let dt=Zt.getPrimaries(Zt.workingColorSpace),Y=g.colorSpace===es?null:Zt.getPrimaries(g.colorSpace),Q=g.colorSpace===es||dt===Y?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pt=g.isCompressedTexture||g.image[0].isCompressedTexture,z=g.image[0]&&g.image[0].isDataTexture,G=[];for(let $=0;$<6;$++)!pt&&!z?G[$]=m(g.image[$],!0,s.maxCubemapSize):G[$]=z?g.image[$].image:g.image[$],G[$]=Fe(g,G[$]);let Z=G[0],et=r.convert(g.format,g.colorSpace),rt=r.convert(g.type),ct=y(g.internalFormat,et,rt,g.normalized,g.colorSpace),R=g.isVideoTexture!==!0,it=lt.__version===void 0||V===!0,W=q.dataReady,st=S(g,Z);jt(e.TEXTURE_CUBE_MAP,g);let ht;if(pt){R&&it&&n.texStorage2D(e.TEXTURE_CUBE_MAP,st,ct,Z.width,Z.height);for(let $=0;$<6;$++){ht=G[$].mipmaps;for(let xt=0;xt<ht.length;xt++){let yt=ht[xt];g.format!==si?et!==null?R?W&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt,0,0,yt.width,yt.height,et,yt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt,ct,yt.width,yt.height,0,yt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?W&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt,0,0,yt.width,yt.height,et,rt,yt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt,ct,yt.width,yt.height,0,et,rt,yt.data)}}}else{if(ht=g.mipmaps,R&&it){ht.length>0&&st++;let $=qt(G[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,st,ct,$.width,$.height)}for(let $=0;$<6;$++)if(z){R?W&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,G[$].width,G[$].height,et,rt,G[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ct,G[$].width,G[$].height,0,et,rt,G[$].data);for(let xt=0;xt<ht.length;xt++){let $t=ht[xt].image[$].image;R?W&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt+1,0,0,$t.width,$t.height,et,rt,$t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt+1,ct,$t.width,$t.height,0,et,rt,$t.data)}}else{R?W&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,et,rt,G[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ct,et,rt,G[$]);for(let xt=0;xt<ht.length;xt++){let yt=ht[xt];R?W&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt+1,0,0,et,rt,yt.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt+1,ct,et,rt,yt.image[$])}}}f(g)&&b(e.TEXTURE_CUBE_MAP),lt.__version=q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ut(T,g,N,V,q,lt){let dt=r.convert(N.format,N.colorSpace),Y=r.convert(N.type),Q=y(N.internalFormat,dt,Y,N.normalized,N.colorSpace),pt=i.get(g),z=i.get(N);if(z.__renderTarget=g,!pt.__hasExternalTextures){let G=Math.max(1,g.width>>lt),Z=Math.max(1,g.height>>lt);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?n.texImage3D(q,lt,Q,G,Z,g.depth,0,dt,Y,null):n.texImage2D(q,lt,Q,G,Z,0,dt,Y,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),ye(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,V,q,z.__webglTexture,0,ve(g)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,V,q,z.__webglTexture,lt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(T,g,N){if(e.bindRenderbuffer(e.RENDERBUFFER,T),g.depthBuffer){let V=g.depthTexture,q=V&&V.isDepthTexture?V.type:null,lt=w(g.stencilBuffer,q),dt=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ye(g)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(g),lt,g.width,g.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(g),lt,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,lt,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,dt,e.RENDERBUFFER,T)}else{let V=g.textures;for(let q=0;q<V.length;q++){let lt=V[q],dt=r.convert(lt.format,lt.colorSpace),Y=r.convert(lt.type),Q=y(lt.internalFormat,dt,Y,lt.normalized,lt.colorSpace);ye(g)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(g),Q,g.width,g.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(g),Q,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,Q,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ht(T,g,N){let V=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=i.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),jt(e.TEXTURE_CUBE_MAP,g.depthTexture);let pt=r.convert(g.depthTexture.format),z=r.convert(g.depthTexture.type),G;g.depthTexture.format===Pi?G=e.DEPTH_COMPONENT24:g.depthTexture.format===Ps&&(G=e.DEPTH24_STENCIL8);for(let Z=0;Z<6;Z++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,G,g.width,g.height,0,pt,z,null)}}else nt(g.depthTexture,0);let lt=q.__webglTexture,dt=ve(g),Y=V?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,Q=g.depthTexture.format===Ps?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(g.depthTexture.format===Pi)ye(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,Y,lt,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,Q,Y,lt,0);else if(g.depthTexture.format===Ps)ye(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,Y,lt,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,Q,Y,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(T){let g=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let V=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){let q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=V}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let V=0;V<6;V++)Ht(g.__webglFramebuffer[V],T,V);else{let V=T.texture.mipmaps;V&&V.length>0?Ht(g.__webglFramebuffer[0],T,0):Ht(g.__webglFramebuffer,T,0)}else if(N){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=e.createRenderbuffer(),be(g.__webglDepthbuffer[V],T,!1);else{let q=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=g.__webglDepthbuffer[V];e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,lt)}}else{let V=T.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),be(g.__webglDepthbuffer,T,!1);else{let q=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,lt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Jt(T,g,N){let V=i.get(T);g!==void 0&&Ut(V.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&ie(T)}function Xt(T){let g=T.texture,N=i.get(T),V=i.get(g);T.addEventListener("dispose",x);let q=T.textures,lt=T.isWebGLCubeRenderTarget===!0,dt=q.length>1;if(dt||(V.__webglTexture===void 0&&(V.__webglTexture=e.createTexture()),V.__version=g.version,o.memory.textures++),lt){N.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[Y]=[];for(let Q=0;Q<g.mipmaps.length;Q++)N.__webglFramebuffer[Y][Q]=e.createFramebuffer()}else N.__webglFramebuffer[Y]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)N.__webglFramebuffer[Y]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(dt)for(let Y=0,Q=q.length;Y<Q;Y++){let pt=i.get(q[Y]);pt.__webglTexture===void 0&&(pt.__webglTexture=e.createTexture(),o.memory.textures++)}if(T.samples>0&&ye(T)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let Q=q[Y];N.__webglColorRenderbuffer[Y]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);let pt=r.convert(Q.format,Q.colorSpace),z=r.convert(Q.type),G=y(Q.internalFormat,pt,z,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),Z=ve(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,Z,G,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),be(N.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(lt){n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),jt(e.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)Ut(N.__webglFramebuffer[Y][Q],T,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else Ut(N.__webglFramebuffer[Y],T,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(g)&&b(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(dt){for(let Y=0,Q=q.length;Y<Q;Y++){let pt=q[Y],z=i.get(pt),G=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(G=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(G,z.__webglTexture),jt(G,pt),Ut(N.__webglFramebuffer,T,pt,e.COLOR_ATTACHMENT0+Y,G,0),f(pt)&&b(G)}n.unbindTexture()}else{let Y=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Y,V.__webglTexture),jt(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)Ut(N.__webglFramebuffer[Q],T,g,e.COLOR_ATTACHMENT0,Y,Q);else Ut(N.__webglFramebuffer,T,g,e.COLOR_ATTACHMENT0,Y,0);f(g)&&b(Y),n.unbindTexture()}T.depthBuffer&&ie(T)}function Se(T){let g=T.textures;for(let N=0,V=g.length;N<V;N++){let q=g[N];if(f(q)){let lt=A(T),dt=i.get(q).__webglTexture;n.bindTexture(lt,dt),b(lt),n.unbindTexture()}}}let xe=[],Ge=[];function He(T){if(T.samples>0){if(ye(T)===!1){let g=T.textures,N=T.width,V=T.height,q=e.COLOR_BUFFER_BIT,lt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=i.get(T),Y=g.length>1;if(Y)for(let pt=0;pt<g.length;pt++)n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let Q=T.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let pt=0;pt<g.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),Y){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,dt.__webglColorRenderbuffer[pt]);let z=i.get(g[pt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,z,0)}e.blitFramebuffer(0,0,N,V,0,0,N,V,q,e.NEAREST),l===!0&&(xe.length=0,Ge.length=0,xe.push(e.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(xe.push(lt),Ge.push(lt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ge)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Y)for(let pt=0;pt<g.length;pt++){n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,dt.__webglColorRenderbuffer[pt]);let z=i.get(g[pt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.TEXTURE_2D,z,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let g=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function ve(T){return Math.min(s.maxSamples,T.samples)}function ye(T){let g=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){let g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Fe(T,g){let N=T.colorSpace,V=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Yo&&N!==es&&(Zt.getTransfer(N)===ae?(V!==si||q!==Vn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",N)),g}function qt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.getTextureUnits=J,this.setTextureUnits=O,this.setTexture2D=nt,this.setTexture2DArray=ot,this.setTexture3D=ft,this.setTextureCube=gt,this.rebindTextures=Jt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nb(e,t){function n(i,s=es){let r,o=Zt.getTransfer(s);if(i===Vn)return e.UNSIGNED_BYTE;if(i===Mc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===bc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ed)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===nd)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qu)return e.BYTE;if(i===td)return e.SHORT;if(i===jr)return e.UNSIGNED_SHORT;if(i===yc)return e.INT;if(i===xi)return e.UNSIGNED_INT;if(i===vi)return e.FLOAT;if(i===gn)return e.HALF_FLOAT;if(i===id)return e.ALPHA;if(i===sd)return e.RGB;if(i===si)return e.RGBA;if(i===Pi)return e.DEPTH_COMPONENT;if(i===Ps)return e.DEPTH_STENCIL;if(i===rd)return e.RED;if(i===Sc)return e.RED_INTEGER;if(i===Is)return e.RG;if(i===Ec)return e.RG_INTEGER;if(i===Tc)return e.RGBA_INTEGER;if(i===Sa||i===Ea||i===Ta||i===wa)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wc||i===Ac||i===Cc||i===Rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pc||i===Ic||i===Lc||i===Dc||i===Uc||i===Aa||i===Nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pc||i===Ic)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Dc)return r.COMPRESSED_R11_EAC;if(i===Uc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Aa)return r.COMPRESSED_RG11_EAC;if(i===Nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Vc||i===Gc||i===Hc||i===Wc||i===Xc||i===qc||i===Yc||i===Zc||i===Kc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kc)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===Jc||i===$c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===jc)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qc||i===th||i===Ca||i===eh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new la(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ze({vertexShader:ib,fragmentShader:sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new je(new ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ad=class extends gi{constructor(t,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null,M=typeof XRWebGLBinding<"u",m=new wd,f={},b=n.getContextAttributes(),A=null,y=null,w=[],S=[],C=new Mt,x=null,E=new mn;E.viewport=new Ce;let I=new mn;I.viewport=new Ce;let L=[E,I],F=new gc,j=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ut=w[tt];return ut===void 0&&(ut=new kr,w[tt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(tt){let ut=w[tt];return ut===void 0&&(ut=new kr,w[tt]=ut),ut.getGripSpace()},this.getHand=function(tt){let ut=w[tt];return ut===void 0&&(ut=new kr,w[tt]=ut),ut.getHandSpace()};function O(tt){let ut=S.indexOf(tt.inputSource);if(ut===-1)return;let at=w[ut];at!==void 0&&(at.update(tt.inputSource,tt.frame,c||o),at.dispatchEvent({type:tt.type,data:tt.inputSource}))}function K(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",X);for(let tt=0;tt<w.length;tt++){let ut=S[tt];ut!==null&&(S[tt]=null,w[tt].disconnect(ut))}j=null,J=null,m.reset();for(let tt in f)delete f[tt];t.setRenderTarget(A),p=null,h=null,d=null,s=null,y=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",K),s.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,Ot=null,Bt=null;b.depth&&(Bt=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,at=b.stencil?Ps:Pi,Ot=b.stencil?Jr:xi);let Ut={colorFormat:n.RGBA8,depthFormat:Bt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ut),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ke(h.textureWidth,h.textureHeight,{format:si,type:Vn,depthTexture:new Qi(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let at={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ke(p.framebufferWidth,p.framebufferHeight,{format:si,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(tt){for(let ut=0;ut<tt.removed.length;ut++){let at=tt.removed[ut],Ot=S.indexOf(at);Ot>=0&&(S[Ot]=null,w[Ot].disconnect(at))}for(let ut=0;ut<tt.added.length;ut++){let at=tt.added[ut],Ot=S.indexOf(at);if(Ot===-1){for(let Ut=0;Ut<w.length;Ut++)if(Ut>=S.length){S.push(at),Ot=Ut;break}else if(S[Ut]===null){S[Ut]=at,Ot=Ut;break}if(Ot===-1)break}let Bt=w[Ot];Bt&&Bt.connect(at)}}let nt=new P,ot=new P;function ft(tt,ut,at){nt.setFromMatrixPosition(ut.matrixWorld),ot.setFromMatrixPosition(at.matrixWorld);let Ot=nt.distanceTo(ot),Bt=ut.projectionMatrix.elements,Ut=at.projectionMatrix.elements,be=Bt[14]/(Bt[10]-1),Ht=Bt[14]/(Bt[10]+1),ie=(Bt[9]+1)/Bt[5],Jt=(Bt[9]-1)/Bt[5],Xt=(Bt[8]-1)/Bt[0],Se=(Ut[8]+1)/Ut[0],xe=be*Xt,Ge=be*Se,He=Ot/(-Xt+Se),ve=He*-Xt;if(ut.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ve),tt.translateZ(He),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Bt[10]===-1)tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let ye=be+He,D=Ht+He,Fe=xe-ve,qt=Ge+(Ot-ve),T=ie*Ht/D*ye,g=Jt*Ht/D*ye;tt.projectionMatrix.makePerspective(Fe,qt,T,g,ye,D),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function gt(tt,ut){ut===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ut.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ut=tt.near,at=tt.far;m.texture!==null&&(m.depthNear>0&&(ut=m.depthNear),m.depthFar>0&&(at=m.depthFar)),F.near=I.near=E.near=ut,F.far=I.far=E.far=at,(j!==F.near||J!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,J=F.far),F.layers.mask=tt.layers.mask|6,E.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let Ot=tt.parent,Bt=F.cameras;gt(F,Ot);for(let Ut=0;Ut<Bt.length;Ut++)gt(Bt[Ut],Ot);Bt.length===2?ft(F,E,I):F.projectionMatrix.copy(E.projectionMatrix),St(tt,F,Ot)};function St(tt,ut,at){at===null?tt.matrix.copy(ut.matrixWorld):(tt.matrix.copy(at.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ut.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Or*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(tt){l=tt,h!==null&&(h.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(tt){return f[tt]};let Kt=null;function _e(tt,ut){if(u=ut.getViewerPose(c||o),_=ut,u!==null){let at=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ot=!1;at.length!==F.cameras.length&&(F.cameras.length=0,Ot=!0);for(let Ht=0;Ht<at.length;Ht++){let ie=at[Ht],Jt=null;if(p!==null)Jt=p.getViewport(ie);else{let Se=d.getViewSubImage(h,ie);Jt=Se.viewport,Ht===0&&(t.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(y))}let Xt=L[Ht];Xt===void 0&&(Xt=new mn,Xt.layers.enable(Ht),Xt.viewport=new Ce,L[Ht]=Xt),Xt.matrix.fromArray(ie.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(ie.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Ht===0&&(F.matrix.copy(Xt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ot===!0&&F.cameras.push(Xt)}let Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let Ht=d.getDepthInformation(at[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,s.renderState)}if(Bt&&Bt.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let Ht=0;Ht<at.length;Ht++){let ie=at[Ht].camera;if(ie){let Jt=f[ie];Jt||(Jt=new la,f[ie]=Jt);let Xt=d.getCameraImage(ie);Jt.sourceTexture=Xt}}}}for(let at=0;at<w.length;at++){let Ot=S[at],Bt=w[at];Ot!==null&&Bt!==void 0&&Bt.update(Ot,ut,c||o)}Kt&&Kt(tt,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),_=null}let jt=new Ym;jt.setAnimationLoop(_e),this.setAnimationLoop=function(tt){Kt=tt},this.dispose=function(){}}},rb=new Ee,Qm=new kt;Qm.set(-1,0,0,0,1,0,0,0,1);function ob(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,cd(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,A,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===An&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===An&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),A=b.envMap,y=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(rb.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qm),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=A*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ab(e,t,n,i){let s={},r={},o=[],a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let S=w.program;i.uniformBlockBinding(y,S)}function c(y,w){let S=s[y.id];S===void 0&&(m(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",b));let C=w.program;i.updateUBOMapping(y,C);let x=t.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let w=d();y.__bindingPointIndex=w;let S=e.createBuffer(),C=y.__size,x=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,w,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let w=s[y.id],S=y.uniforms,C=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,w);for(let x=0,E=S.length;x<E;x++){let I=S[x];if(Array.isArray(I))for(let L=0,F=I.length;L<F;L++)p(I[L],x,L,C);else p(I,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,w,S,C){if(M(y,w,S,C)===!0){let x=y.__offset,E=y.value;if(Array.isArray(E)){let I=0;for(let L=0;L<E.length;L++){let F=E[L],j=f(F);_(F,y.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,y.__data)}}function _(y,w,S){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,S)}function M(y,w,S,C){let x=y.value,E=w+"_"+S;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{let I=C[E];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(y){let w=y.uniforms,S=0,C=16;for(let E=0,I=w.length;E<I;E++){let L=Array.isArray(w[E])?w[E]:[w[E]];for(let F=0,j=L.length;F<j;F++){let J=L[F],O=Array.isArray(J.value)?J.value:[J.value];for(let K=0,X=O.length;K<X;K++){let nt=O[K],ot=f(nt),ft=S%C,gt=ft%ot.boundary,St=ft+gt;S+=gt,St!==0&&C-St<ot.storage&&(S+=C-St),J.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=S,S+=ot.storage}}}let x=S%C;return x>0&&(S+=C-x),y.__size=S,y.__cache={},this}function f(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",y),w}function b(y){let w=y.target;w.removeEventListener("dispose",b);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),e.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let y in s)e.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}var lb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function cb(){return Li===null&&(Li=new $l(lb,16,16,Is,gn),Li.name="DFG_LUT",Li.minFilter=Ze,Li.magFilter=Ze,Li.wrapS=Ri,Li.wrapT=Ri,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var lh=class{constructor(t={}){let{canvas:n=xm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Vn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let M=p,m=new Set([Tc,Ec,Sc]),f=new Set([Vn,xi,jr,Jr,Mc,bc]),b=new Uint32Array(4),A=new Int32Array(4),y=new P,w=null,S=null,C=[],x=[],E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,F=null,j=null,J=null,O=null;this._outputColorSpace=On;let K=0,X=0,nt=null,ot=-1,ft=null,gt=new Ce,St=new Ce,Kt=null,_e=new zt(0),jt=0,tt=n.width,ut=n.height,at=1,Ot=null,Bt=null,Ut=new Ce(0,0,tt,ut),be=new Ce(0,0,tt,ut),Ht=!1,ie=new ra,Jt=!1,Xt=!1,Se=new Ee,xe=new P,Ge=new Ce,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ye(){return nt===null?at:1}let D=i;function Fe(v,U){return n.getContext(v,U)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",$t,!1),n.addEventListener("webglcontextrestored",Qt,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),D===null){let U="webgl2";if(D=Fe(U,v),D===null)throw Fe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Ft("WebGLRenderer: "+v.message),v}let qt,T,g,N,V,q,lt,dt,Y,Q,pt,z,G,Z,et,rt,ct,R,it,W,st,ht,$;function xt(){qt=new g2(D),qt.init(),st=new nb(D,qt),T=new l2(D,qt,t,st),g=new tb(D,qt),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),j=D.createFramebuffer(),J=D.createFramebuffer(),O=D.createFramebuffer(),N=new v2(D),V=new zM,q=new eb(D,qt,g,V,T,st,N),lt=new m2(I),dt=new Sx(D),ht=new o2(D,dt),Y=new _2(D,dt,N,ht),Q=new M2(D,Y,dt,ht,N),R=new y2(D,T,q),et=new c2(V),pt=new kM(I,lt,qt,T,ht,et),z=new ob(I,V),G=new GM,Z=new ZM(qt),ct=new r2(I,lt,g,Q,_,l),rt=new QM(I,Q,T),$=new ab(D,N,T,g),it=new a2(D,qt,N),W=new x2(D,qt,N),N.programs=pt.programs,I.capabilities=T,I.extensions=qt,I.properties=V,I.renderLists=G,I.shadowMap=rt,I.state=g,I.info=N}xt(),M!==Vn&&(E=new S2(M,n.width,n.height,a,s,r));let yt=new Ad(I,D);this.xr=yt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=qt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=qt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(v){v!==void 0&&(at=v,this.setSize(tt,ut,!1))},this.getSize=function(v){return v.set(tt,ut)},this.setSize=function(v,U,H=!0){if(yt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=v,ut=U,n.width=Math.floor(v*at),n.height=Math.floor(U*at),H===!0&&(n.style.width=v+"px",n.style.height=U+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(tt*at,ut*at).floor()},this.setDrawingBufferSize=function(v,U,H){tt=v,ut=U,at=H,n.width=Math.floor(v*H),n.height=Math.floor(U*H),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(M===Vn){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(gt)},this.getViewport=function(v){return v.copy(Ut)},this.setViewport=function(v,U,H,B){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,U,H,B),g.viewport(gt.copy(Ut).multiplyScalar(at).round())},this.getScissor=function(v){return v.copy(be)},this.setScissor=function(v,U,H,B){v.isVector4?be.set(v.x,v.y,v.z,v.w):be.set(v,U,H,B),g.scissor(St.copy(be).multiplyScalar(at).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(v){g.setScissorTest(Ht=v)},this.setOpaqueSort=function(v){Ot=v},this.setTransparentSort=function(v){Bt=v},this.getClearColor=function(v){return v.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,H=!0){let B=0;if(v){let k=!1;if(nt!==null){let vt=nt.texture.format;k=m.has(vt)}if(k){let vt=nt.texture.type,Et=f.has(vt),_t=ct.getClearColor(),wt=ct.getClearAlpha(),Rt=_t.r,Vt=_t.g,Wt=_t.b;Et?(b[0]=Rt,b[1]=Vt,b[2]=Wt,b[3]=wt,D.clearBufferuiv(D.COLOR,0,b)):(A[0]=Rt,A[1]=Vt,A[2]=Wt,A[3]=wt,D.clearBufferiv(D.COLOR,0,A))}else B|=D.COLOR_BUFFER_BIT}U&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){n.removeEventListener("webglcontextlost",$t,!1),n.removeEventListener("webglcontextrestored",Qt,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),ct.dispose(),G.dispose(),Z.dispose(),V.dispose(),lt.dispose(),Q.dispose(),ht.dispose(),$.dispose(),pt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",rp),yt.removeEventListener("sessionend",op),Vs.stop()};function $t(v){v.preventDefault(),Jo("WebGLRenderer: Context Lost."),L=!0}function Qt(){Jo("WebGLRenderer: Context Restored."),L=!1;let v=N.autoReset,U=rt.enabled,H=rt.autoUpdate,B=rt.needsUpdate,k=rt.type;xt(),N.autoReset=v,rt.enabled=U,rt.autoUpdate=H,rt.needsUpdate=B,rt.type=k}function Oe(v){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ti(v){let U=v.target;U.removeEventListener("dispose",Ti),y1(U)}function y1(v){M1(v),V.remove(v)}function M1(v){let U=V.get(v).programs;U!==void 0&&(U.forEach(function(H){pt.releaseProgram(H)}),v.isShaderMaterial&&pt.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,H,B,k,vt){U===null&&(U=He);let Et=k.isMesh&&k.matrixWorld.determinantAffine()<0,_t=E1(v,U,H,B,k);g.setMaterial(B,Et);let wt=H.index,Rt=1;if(B.wireframe===!0){if(wt=Y.getWireframeAttribute(H),wt===void 0)return;Rt=2}let Vt=H.drawRange,Wt=H.attributes.position,It=Vt.start*Rt,he=(Vt.start+Vt.count)*Rt;vt!==null&&(It=Math.max(It,vt.start*Rt),he=Math.min(he,(vt.start+vt.count)*Rt)),wt!==null?(It=Math.max(It,0),he=Math.min(he,wt.count)):Wt!=null&&(It=Math.max(It,0),he=Math.min(he,Wt.count));let Be=he-It;if(Be<0||Be===1/0)return;ht.setup(k,B,_t,H,wt);let De,fe=it;if(wt!==null&&(De=dt.get(wt),fe=W,fe.setIndex(De)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*ye()),fe.setMode(D.LINES)):fe.setMode(D.TRIANGLES);else if(k.isLine){let dn=B.linewidth;dn===void 0&&(dn=1),g.setLineWidth(dn*ye()),k.isLineSegments?fe.setMode(D.LINES):k.isLineLoop?fe.setMode(D.LINE_LOOP):fe.setMode(D.LINE_STRIP)}else k.isPoints?fe.setMode(D.POINTS):k.isSprite&&fe.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))fe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let dn=k._multiDrawStarts,bt=k._multiDrawCounts,Un=k._multiDrawCount,ee=wt?dt.get(wt).bytesPerElement:1,$n=V.get(B).currentProgram.getUniforms();for(let wi=0;wi<Un;wi++)$n.setValue(D,"_gl_DrawID",wi),fe.render(dn[wi]/ee,bt[wi])}else if(k.isInstancedMesh)fe.renderInstances(It,Be,k.count);else if(H.isInstancedBufferGeometry){let dn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bt=Math.min(H.instanceCount,dn);fe.renderInstances(It,Be,bt)}else fe.render(It,Be)};function sp(v,U,H){v.transparent===!0&&v.side===ni&&v.forceSinglePass===!1?(v.side=An,v.needsUpdate=!0,il(v,U,H),v.side=$i,v.needsUpdate=!0,il(v,U,H),v.side=ni):il(v,U,H)}this.compile=function(v,U,H=null){H===null&&(H=v),S=Z.get(H),S.init(U),x.push(S),H.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),v!==H&&v.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights();let B=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let vt=k.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){let _t=vt[Et];sp(_t,H,k),B.add(_t)}else sp(vt,H,k),B.add(vt)}),S=x.pop(),B},this.compileAsync=function(v,U,H=null){let B=this.compile(v,U,H);return new Promise(k=>{function vt(){if(B.forEach(function(Et){V.get(Et).currentProgram.isReady()&&B.delete(Et)}),B.size===0){k(v);return}setTimeout(vt,10)}qt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let lu=null;function b1(v){lu&&lu(v)}function rp(){Vs.stop()}function op(){Vs.start()}let Vs=new Ym;Vs.setAnimationLoop(b1),typeof self<"u"&&Vs.setContext(self),this.setAnimationLoop=function(v){lu=v,yt.setAnimationLoop(v),v===null?Vs.stop():Vs.start()},yt.addEventListener("sessionstart",rp),yt.addEventListener("sessionend",op),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(v,U);let H=yt.enabled===!0&&yt.isPresenting===!0,B=E!==null&&(nt===null||H)&&E.begin(I,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(U),U=yt.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,U,nt),S=Z.get(v,x.length),S.init(U),S.state.textureUnits=q.getTextureUnits(),x.push(S),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ie.setFromProjectionMatrix(Se,mi,U.reversedDepth),Xt=this.localClippingEnabled,Jt=et.init(this.clippingPlanes,Xt),w=G.get(v,C.length),w.init(),C.push(w),yt.enabled===!0&&yt.isPresenting===!0){let Et=I.xr.getDepthSensingMesh();Et!==null&&cu(Et,U,-1/0,I.sortObjects)}cu(v,U,0,I.sortObjects),w.finish(),I.sortObjects===!0&&w.sort(Ot,Bt,U.reversedDepth),ve=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,ve&&ct.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Jt===!0&&et.beginShadows();let k=S.state.shadowsArray;if(rt.render(k,v,U),Jt===!0&&et.endShadows(),(B&&E.hasRenderPass())===!1){let Et=w.opaque,_t=w.transmissive;if(S.setupLights(),U.isArrayCamera){let wt=U.cameras;if(_t.length>0)for(let Rt=0,Vt=wt.length;Rt<Vt;Rt++){let Wt=wt[Rt];lp(Et,_t,v,Wt)}ve&&ct.render(v);for(let Rt=0,Vt=wt.length;Rt<Vt;Rt++){let Wt=wt[Rt];ap(w,v,Wt,Wt.viewport)}}else _t.length>0&&lp(Et,_t,v,U),ve&&ct.render(v),ap(w,v,U)}nt!==null&&X===0&&(q.updateMultisampleRenderTarget(nt),q.updateRenderTargetMipmap(nt)),B&&E.end(I),v.isScene===!0&&v.onAfterRender(I,v,U),ht.resetDefaultState(),ot=-1,ft=null,x.pop(),x.length>0?(S=x[x.length-1],q.setTextureUnits(S.state.textureUnits),Jt===!0&&et.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,F!==null&&F.renderEnd()};function cu(v,U,H,B){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ie.intersectsSprite(v)){B&&Ge.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Se);let Et=Q.update(v),_t=v.material;_t.visible&&w.push(v,Et,_t,H,Ge.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ie.intersectsObject(v))){let Et=Q.update(v),_t=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ge.copy(v.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ge.copy(Et.boundingSphere.center)),Ge.applyMatrix4(v.matrixWorld).applyMatrix4(Se)),Array.isArray(_t)){let wt=Et.groups;for(let Rt=0,Vt=wt.length;Rt<Vt;Rt++){let Wt=wt[Rt],It=_t[Wt.materialIndex];It&&It.visible&&w.push(v,Et,It,H,Ge.z,Wt)}}else _t.visible&&w.push(v,Et,_t,H,Ge.z,null)}}let vt=v.children;for(let Et=0,_t=vt.length;Et<_t;Et++)cu(vt[Et],U,H,B)}function ap(v,U,H,B){let{opaque:k,transmissive:vt,transparent:Et}=v;S.setupLightsView(H),Jt===!0&&et.setGlobalState(I.clippingPlanes,H),B&&g.viewport(gt.copy(B)),k.length>0&&nl(k,U,H),vt.length>0&&nl(vt,U,H),Et.length>0&&nl(Et,U,H),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function lp(v,U,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){let It=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new Ke(1,1,{generateMipmaps:!0,type:It?gn:Vn,minFilter:Rs,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let vt=S.state.transmissionRenderTarget[B.id],Et=B.viewport||gt;vt.setSize(Et.z*I.transmissionResolutionScale,Et.w*I.transmissionResolutionScale);let _t=I.getRenderTarget(),wt=I.getActiveCubeFace(),Rt=I.getActiveMipmapLevel();I.setRenderTarget(vt),I.getClearColor(_e),jt=I.getClearAlpha(),jt<1&&I.setClearColor(16777215,.5),I.clear(),ve&&ct.render(H);let Vt=I.toneMapping;I.toneMapping=_i;let Wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),Jt===!0&&et.setGlobalState(I.clippingPlanes,B),nl(v,H,B),q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let he=0,Be=U.length;he<Be;he++){let De=U[he],{object:fe,geometry:dn,material:bt,group:Un}=De;if(bt.side===ni&&fe.layers.test(B.layers)){let ee=bt.side;bt.side=An,bt.needsUpdate=!0,cp(fe,H,B,dn,bt,Un),bt.side=ee,bt.needsUpdate=!0,It=!0}}It===!0&&(q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt))}I.setRenderTarget(_t,wt,Rt),I.setClearColor(_e,jt),Wt!==void 0&&(B.viewport=Wt),I.toneMapping=Vt}function nl(v,U,H){let B=U.isScene===!0?U.overrideMaterial:null;for(let k=0,vt=v.length;k<vt;k++){let Et=v[k],{object:_t,geometry:wt,group:Rt}=Et,Vt=Et.material;Vt.allowOverride===!0&&B!==null&&(Vt=B),_t.layers.test(H.layers)&&cp(_t,U,H,wt,Vt,Rt)}}function cp(v,U,H,B,k,vt){v.onBeforeRender(I,U,H,B,k,vt),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(I,U,H,B,v,vt),k.transparent===!0&&k.side===ni&&k.forceSinglePass===!1?(k.side=An,k.needsUpdate=!0,I.renderBufferDirect(H,U,B,k,v,vt),k.side=$i,k.needsUpdate=!0,I.renderBufferDirect(H,U,B,k,v,vt),k.side=ni):I.renderBufferDirect(H,U,B,k,v,vt),v.onAfterRender(I,U,H,B,k,vt)}function il(v,U,H){U.isScene!==!0&&(U=He);let B=V.get(v),k=S.state.lights,vt=S.state.shadowsArray,Et=k.state.version,_t=pt.getParameters(v,k.state,vt,U,H,S.state.lightProbeGridArray),wt=pt.getProgramCacheKey(_t),Rt=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;let Vt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=lt.get(v.envMap||B.environment,Vt),B.envMapRotation=B.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Rt===void 0&&(v.addEventListener("dispose",Ti),Rt=new Map,B.programs=Rt);let Wt=Rt.get(wt);if(Wt!==void 0){if(B.currentProgram===Wt&&B.lightsStateVersion===Et)return up(v,_t),Wt}else _t.uniforms=pt.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,H,_t),v.onBeforeCompile(_t,I),Wt=pt.acquireProgram(_t,wt),Rt.set(wt,Wt),B.uniforms=_t.uniforms;let It=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(It.clippingPlanes=et.uniform),up(v,_t),B.needsLights=w1(v),B.lightsStateVersion=Et,B.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=Wt,B.uniformsList=null,Wt}function hp(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=to.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function up(v,U){let H=V.get(v);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function S1(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let H=0,B=v.length;H<B;H++){let k=v[H];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function E1(v,U,H,B,k){U.isScene!==!0&&(U=He),q.resetTextureUnits();let vt=U.fog,Et=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,_t=nt===null?I.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zt.workingColorSpace,wt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Rt=lt.get(B.envMap||Et,wt),Vt=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Wt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),It=!!H.morphAttributes.position,he=!!H.morphAttributes.normal,Be=!!H.morphAttributes.color,De=_i;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(De=I.toneMapping);let fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,dn=fe!==void 0?fe.length:0,bt=V.get(B),Un=S.state.lights;if(Jt===!0&&(Xt===!0||v!==ft)){let ge=v===ft&&B.id===ot;et.setState(B,v,ge)}let ee=!1;B.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Un.state.version||bt.outputColorSpace!==_t||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==Rt||B.fog===!0&&bt.fog!==vt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==et.numPlanes||bt.numIntersection!==et.numIntersection)||bt.vertexAlphas!==Vt||bt.vertexTangents!==Wt||bt.morphTargets!==It||bt.morphNormals!==he||bt.morphColors!==Be||bt.toneMapping!==De||bt.morphTargetsCount!==dn||!!bt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,bt.__version=B.version);let $n=bt.currentProgram;ee===!0&&($n=il(B,U,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,$n,bt));let wi=!1,ls=!1,gr=!1,pe=$n.getUniforms(),ke=bt.uniforms;if(g.useProgram($n.program)&&(wi=!0,ls=!0,gr=!0),B.id!==ot&&(ot=B.id,ls=!0),bt.needsLights){let ge=S1(S.state.lightProbeGridArray,k);bt.lightProbeGrid!==ge&&(bt.lightProbeGrid=ge,ls=!0)}if(wi||ft!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pe.setValue(D,"projectionMatrix",v.projectionMatrix),pe.setValue(D,"viewMatrix",v.matrixWorldInverse);let hs=pe.map.cameraPosition;hs!==void 0&&hs.setValue(D,xe.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pe.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),ft!==v&&(ft=v,ls=!0,gr=!0)}if(bt.needsLights&&(Un.state.directionalShadowMap.length>0&&pe.setValue(D,"directionalShadowMap",Un.state.directionalShadowMap,q),Un.state.spotShadowMap.length>0&&pe.setValue(D,"spotShadowMap",Un.state.spotShadowMap,q),Un.state.pointShadowMap.length>0&&pe.setValue(D,"pointShadowMap",Un.state.pointShadowMap,q)),k.isSkinnedMesh){pe.setOptional(D,k,"bindMatrix"),pe.setOptional(D,k,"bindMatrixInverse");let ge=k.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),pe.setValue(D,"boneTexture",ge.boneTexture,q))}k.isBatchedMesh&&(pe.setOptional(D,k,"batchingTexture"),pe.setValue(D,"batchingTexture",k._matricesTexture,q),pe.setOptional(D,k,"batchingIdTexture"),pe.setValue(D,"batchingIdTexture",k._indirectTexture,q),pe.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&pe.setValue(D,"batchingColorTexture",k._colorsTexture,q));let cs=H.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&R.update(k,H,$n),(ls||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,pe.setValue(D,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(ke.envMapIntensity.value=U.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=cb()),ls){if(pe.setValue(D,"toneMappingExposure",I.toneMappingExposure),bt.needsLights&&T1(ke,gr),vt&&B.fog===!0&&z.refreshFogUniforms(ke,vt),z.refreshMaterialUniforms(ke,B,at,ut,S.state.transmissionRenderTarget[v.id]),bt.needsLights&&bt.lightProbeGrid){let ge=bt.lightProbeGrid;ke.probesSH.value=ge.texture,ke.probesMin.value.copy(ge.boundingBox.min),ke.probesMax.value.copy(ge.boundingBox.max),ke.probesResolution.value.copy(ge.resolution)}to.upload(D,hp(bt),ke,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(to.upload(D,hp(bt),ke,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pe.setValue(D,"center",k.center),pe.setValue(D,"modelViewMatrix",k.modelViewMatrix),pe.setValue(D,"normalMatrix",k.normalMatrix),pe.setValue(D,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let ge=B.uniformsGroups;for(let hs=0,_r=ge.length;hs<_r;hs++){let dp=ge[hs];$.update(dp,$n),$.bind(dp,$n)}}return $n}function T1(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function w1(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,U,H){let B=V.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(v.texture).__webglTexture=U,V.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let H=V.get(v);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,H=0){nt=v,K=U,X=H;let B=null,k=!1,vt=!1;if(v){let _t=V.get(v);if(_t.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,_t.__webglFramebuffer),gt.copy(v.viewport),St.copy(v.scissor),Kt=v.scissorTest,g.viewport(gt),g.scissor(St),g.setScissorTest(Kt),ot=-1;return}else if(_t.__webglFramebuffer===void 0)q.setupRenderTarget(v);else if(_t.__hasExternalTextures)q.rebindTextures(v,V.get(v.texture).__webglTexture,V.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Vt=v.depthTexture;if(_t.__boundDepthTexture!==Vt){if(Vt!==null&&V.has(Vt)&&(v.width!==Vt.image.width||v.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(v)}}let wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(vt=!0);let Rt=V.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?B=Rt[U][H]:B=Rt[U],k=!0):v.samples>0&&q.useMultisampledRTT(v)===!1?B=V.get(v).__webglMultisampledFramebuffer:Array.isArray(Rt)?B=Rt[H]:B=Rt,gt.copy(v.viewport),St.copy(v.scissor),Kt=v.scissorTest}else gt.copy(Ut).multiplyScalar(at).floor(),St.copy(be).multiplyScalar(at).floor(),Kt=Ht;if(H!==0&&(B=j),g.bindFramebuffer(D.FRAMEBUFFER,B)&&g.drawBuffers(v,B),g.viewport(gt),g.scissor(St),g.setScissorTest(Kt),k){let _t=V.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,H)}else if(vt){let _t=U;for(let wt=0;wt<v.textures.length;wt++){let Rt=V.get(v.textures[wt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+wt,Rt.__webglTexture,H,_t)}}else if(v!==null&&H!==0){let _t=V.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,H)}ot=-1},this.readRenderTargetPixels=function(v,U,H,B,k,vt,Et,_t=0){if(!(v&&v.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt){g.bindFramebuffer(D.FRAMEBUFFER,wt);try{let Rt=v.textures[_t],Vt=Rt.format,Wt=Rt.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_t),!T.textureFormatReadable(Vt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Wt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-B&&H>=0&&H<=v.height-k&&D.readPixels(U,H,B,k,st.convert(Vt),st.convert(Wt),vt)}finally{let Rt=nt!==null?V.get(nt).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(v,U,H,B,k,vt,Et,_t=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt)if(U>=0&&U<=v.width-B&&H>=0&&H<=v.height-k){g.bindFramebuffer(D.FRAMEBUFFER,wt);let Rt=v.textures[_t],Vt=Rt.format,Wt=Rt.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_t),!T.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.bufferData(D.PIXEL_PACK_BUFFER,vt.byteLength,D.STREAM_READ),D.readPixels(U,H,B,k,st.convert(Vt),st.convert(Wt),0);let he=nt!==null?V.get(nt).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,he);let Be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ym(D,Be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,vt),D.deleteBuffer(It),D.deleteSync(Be),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,H=0){let B=Math.pow(2,-H),k=Math.floor(v.image.width*B),vt=Math.floor(v.image.height*B),Et=U!==null?U.x:0,_t=U!==null?U.y:0;q.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,Et,_t,k,vt),g.unbindTexture()},this.copyTextureToTexture=function(v,U,H=null,B=null,k=0,vt=0){let Et,_t,wt,Rt,Vt,Wt,It,he,Be,De=v.isCompressedTexture?v.mipmaps[vt]:v.image;if(H!==null)Et=H.max.x-H.min.x,_t=H.max.y-H.min.y,wt=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,Vt=H.min.y,Wt=H.isBox3?H.min.z:0;else{let ke=Math.pow(2,-k);Et=Math.floor(De.width*ke),_t=Math.floor(De.height*ke),v.isDataArrayTexture?wt=De.depth:v.isData3DTexture?wt=Math.floor(De.depth*ke):wt=1,Rt=0,Vt=0,Wt=0}B!==null?(It=B.x,he=B.y,Be=B.z):(It=0,he=0,Be=0);let fe=st.convert(U.format),dn=st.convert(U.type),bt;U.isData3DTexture?(q.setTexture3D(U,0),bt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(q.setTexture2DArray(U,0),bt=D.TEXTURE_2D_ARRAY):(q.setTexture2D(U,0),bt=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=g.getParameter(D.UNPACK_ROW_LENGTH),ee=g.getParameter(D.UNPACK_IMAGE_HEIGHT),$n=g.getParameter(D.UNPACK_SKIP_PIXELS),wi=g.getParameter(D.UNPACK_SKIP_ROWS),ls=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,De.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,De.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),g.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Wt);let gr=v.isDataArrayTexture||v.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let ke=V.get(v),cs=V.get(U),ge=V.get(ke.__renderTarget),hs=V.get(cs.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,ge.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let _r=0;_r<wt;_r++)gr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(v).__webglTexture,k,Wt+_r),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(U).__webglTexture,vt,Be+_r)),D.blitFramebuffer(Rt,Vt,Et,_t,It,he,Et,_t,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||V.has(v)){let ke=V.get(v),cs=V.get(U);g.bindFramebuffer(D.READ_FRAMEBUFFER,J),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let ge=0;ge<wt;ge++)gr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ke.__webglTexture,k,Wt+ge):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ke.__webglTexture,k),pe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,cs.__webglTexture,vt,Be+ge):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,cs.__webglTexture,vt),k!==0?D.blitFramebuffer(Rt,Vt,Et,_t,It,he,Et,_t,D.COLOR_BUFFER_BIT,D.NEAREST):pe?D.copyTexSubImage3D(bt,vt,It,he,Be+ge,Rt,Vt,Et,_t):D.copyTexSubImage2D(bt,vt,It,he,Rt,Vt,Et,_t);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pe?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(bt,vt,It,he,Be,Et,_t,wt,fe,dn,De.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,vt,It,he,Be,Et,_t,wt,fe,De.data):D.texSubImage3D(bt,vt,It,he,Be,Et,_t,wt,fe,dn,De):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,vt,It,he,Et,_t,fe,dn,De.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,vt,It,he,De.width,De.height,fe,De.data):D.texSubImage2D(D.TEXTURE_2D,vt,It,he,Et,_t,fe,dn,De);g.pixelStorei(D.UNPACK_ROW_LENGTH,Un),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ee),g.pixelStorei(D.UNPACK_SKIP_PIXELS,$n),g.pixelStorei(D.UNPACK_SKIP_ROWS,wi),g.pixelStorei(D.UNPACK_SKIP_IMAGES,ls),vt===0&&U.generateMipmaps&&D.generateMipmap(bt),g.unbindTexture()},this.initRenderTarget=function(v){V.get(v).__webglFramebuffer===void 0&&q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?q.setTextureCube(v,0):v.isData3DTexture?q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?q.setTexture2DArray(v,0):q.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){K=0,X=0,nt=null,g.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Zt._getUnpackColorSpace()}};var t0={type:"change"},Rd={type:"start"},n0={type:"end"},uh=new Ms,e0=new ti,ub=Math.cos(70*$r.DEG2RAD),Qe=new P,Pn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cd=1e-6,dh=class extends xa{constructor(t,n=null){super(t,n),this.state=ue.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Bn,this._lastTargetPosition=new P,this._quat=new Bn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ts,this._sphericalDelta=new Ts,this._scale=1,this._panOffset=new P,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new P,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fb.bind(this),this._onPointerDown=db.bind(this),this._onPointerUp=pb.bind(this),this._onContextMenu=Mb.bind(this),this._onMouseWheel=_b.bind(this),this._onKeyDown=xb.bind(this),this._onTouchStart=vb.bind(this),this._onTouchMove=yb.bind(this),this._onMouseDown=mb.bind(this),this._onMouseMove=gb.bind(this),this._interceptControlDown=bb.bind(this),this._interceptControlUp=Sb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(t0),this.update(),this.state=ue.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let n=this.object.position;Qe.copy(n).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Pn:i>Math.PI&&(i-=Pn),s<-Math.PI?s+=Pn:s>Math.PI&&(s-=Pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),n.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Qe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(uh.origin.copy(this.object.position),uh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uh.direction))<ub?this.object.lookAt(this.target):(e0.setFromNormalAndCoplanarPoint(this.object.up,this.target),uh.intersectPlane(e0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cd||this._lastTargetPosition.distanceToSquared(this.target)>Cd?(this.dispatchEvent(t0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pn/60*this.autoRotateSpeed*t:Pn/60/60*this.autoRotateSpeed}_getZoomScale(t){let n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Qe.setFromMatrixColumn(n,0),Qe.multiplyScalar(-t),this._panOffset.add(Qe)}_panUp(t,n){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(n,1):(Qe.setFromMatrixColumn(n,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(t),this._panOffset.add(Qe)}_pan(t,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Qe.copy(s).sub(this.target);let r=Qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+n.x)*.5,a=(t.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Mt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){let n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function db(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fb(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function pb(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(n0),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function mb(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ue.DOLLY;break;case ws.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ue.ROTATE}break;case ws.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Rd)}function gb(e){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function _b(e){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(e.preventDefault(),this.dispatchEvent(Rd),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(n0))}function xb(e){this.enabled!==!1&&this._handleKeyDown(e)}function vb(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ue.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ue.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Rd)}function yb(e){switch(this._trackPointer(e),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ue.NONE}}function Mb(e){this.enabled!==!1&&e.preventDefault()}function bb(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sb(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var no={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Eb=new js(-1,1,1,-1,0,1),Pd=class extends le{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}},Tb=new Pd,io=class{constructor(t){this._mesh=new je(Tb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Eb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var so=class extends yi{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Qs.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new io(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var La=class extends yi{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},fh=class extends yi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ph=class{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){let i=t.getSize(new Mt);this._width=i.width,this._height=i.height,n=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new so(no),this.copyPass.material.blending=ii,this.timer=new ga}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let n=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}La!==void 0&&(o instanceof La?i=!0:o instanceof fh&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){let n=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var mh=class extends yi{constructor(t,n,i=null,s=null,r=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new zt}render(t,n,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var i0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ro=class e extends yi{constructor(t,n=1,i,s){super(),this.strength=n,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new zt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(r,o,{type:gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ke(r,o,{type:gn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new Ke(r,o,{type:gn});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}let a=i0;this.highPassUniforms=Qs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Mt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qs.clone(no.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:no.vertexShader,fragmentShader:no.fragmentShader,premultipliedAlpha:!0,blending:zn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new zt,this._oldClearAlpha=1,this._basic=new ei,this._fsQuad=new io(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Mt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,n,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let n=[],i=t/3;for(let s=0;s<t;s++)n.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ro.BlurDirectionX=new Mt(1,0);ro.BlurDirectionY=new Mt(0,1);var uo=typeof self<"u"?self:{};function dg(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=uo,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function er(){throw Error("Invalid UTF8")}function s0(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var gh,Id,wb=typeof TextDecoder<"u",Ab,Cb=typeof TextEncoder<"u";function fg(e){if(Cb)e=(Ab||=new TextEncoder).encode(e);else{let n=0,i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){let r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function pg(e){uo.setTimeout((()=>{throw e}),0)}var zd,Rb=dg(610401301,!1),r0=dg(748402147,!0);function o0(){var e=uo.navigator;return e&&(e=e.userAgent)?e:""}var a0=uo.navigator;function Uh(e){return Uh[" "](e),e}zd=a0&&a0.userAgentData||null,Uh[" "]=function(){};var mg={},Na=null;function Pb(e){let t=e.length,n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);let i=new Uint8Array(n),s=0;return(function(r,o){function a(c){for(;l<r.length;){let u=r.charAt(l++),d=Na[u];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}gg();let l=0;for(;;){let c=a(-1),u=a(0),d=a(64),h=a(64);if(h===64&&c===-1)break;o(c<<2|u>>4),d!=64&&(o(u<<4&240|d>>2),h!=64&&o(d<<6&192|h))}})(e,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function gg(){if(!Na){Na={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=e.concat(t[n].split(""));mg[n]=i;for(let s=0;s<i.length;s++){let r=i[s];Na[r]===void 0&&(Na[r]=s)}}}}var Ib=typeof Uint8Array<"u",_g=!(!(Rb&&zd&&zd.brands.length>0)&&(o0().indexOf("Trident")!=-1||o0().indexOf("MSIE")!=-1))&&typeof btoa=="function",l0=/[-_.]/g,Lb={"-":"+",_:"/",".":"="};function Db(e){return Lb[e]||""}function xg(e){if(!_g)return Pb(e);e=l0.test(e)?e.replace(l0,Db):e,e=atob(e);let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function af(e){return Ib&&e!=null&&e instanceof Uint8Array}var fo={};function hr(){return Ub||=new Bi(null,fo)}function lf(e){vg(fo);var t=e.g;return(t=t==null||af(t)?t:typeof t=="string"?xg(t):null)==null?t:e.g=t}var Bi=class{h(){return new Uint8Array(lf(this)||0)}constructor(e,t){if(vg(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}},Ub,Nb;function vg(e){if(e!==fo)throw Error("illegal external caller")}function yg(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function Vd(e){return yg(e=Error(e),"warning"),e}function po(e,t){if(e!=null){var n=Nb??={},i=n[e]||0;i>=t||(n[e]=i+1,yg(e=Error(),"incident"),pg(e))}}function Eo(){return typeof BigInt=="function"}var To=typeof Symbol=="function"&&typeof Symbol()=="symbol";function zi(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var Fb=zi("jas",void 0,!0),c0=zi(void 0,"0di"),Da=zi(void 0,"1oa"),Xn=zi(void 0,Symbol()),Ob=zi(void 0,"0ub"),Bb=zi(void 0,"0ubs"),Gd=zi(void 0,"0ubsb"),kb=zi(void 0,"0actk"),mo=zi("m_m","Pa",!0),h0=zi(),Mg={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},bg=Object.defineProperties,At=To?Fb:"Ga",fr,u0=[];function Ya(e,t){To||At in e||bg(e,Mg),e[At]|=t}function rn(e,t){To||At in e||bg(e,Mg),e[At]=t}function Za(e){return Ya(e,34),e}function Ga(e){return Ya(e,8192),e}rn(u0,7),fr=Object.freeze(u0);var go={};function Yn(e,t){return t===void 0?e.h!==ur&&!!(2&(0|e.v[At])):!!(2&t)&&e.h!==ur}var ur={};function cf(e,t){if(e!=null){if(typeof e=="string")e=e?new Bi(e,fo):hr();else if(e.constructor!==Bi)if(af(e))e=e.length?new Bi(new Uint8Array(e),fo):hr();else{if(!t)throw Error();e=void 0}}return e}var wh=class{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){let t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}},zb=Object.freeze({});function Sg(e,t,n){let i=128&t?0:-1,s=e.length;var r;(r=!!s)&&(r=(r=e[s-1])!=null&&typeof r=="object"&&r.constructor===Object);let o=s+(r?-1:0);for(t=128&t?1:0;t<o;t++)n(t-i,e[t]);if(r){e=e[s-1];for(let a in e)!isNaN(a)&&n(+a,e[a])}}var Eg={};function wo(e){return 128&e?Eg:void 0}function Nh(e){return e.Na=!0,e}var Vb=Nh((e=>typeof e=="number")),d0=Nh((e=>typeof e=="string")),Gb=Nh((e=>typeof e=="boolean")),Fh=typeof uo.BigInt=="function"&&typeof uo.BigInt(0)=="bigint";function qn(e){var t=e;if(d0(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(Vb(t)&&!Number.isSafeInteger(t))throw Error(String(t));return Fh?BigInt(e):e=Gb(e)?e?"1":"0":d0(e)?e.trim()||"0":String(e)}var Hd=Nh((e=>Fh?e>=Wb&&e<=qb:e[0]==="-"?f0(e,Hb):f0(e,Xb))),Hb=Number.MIN_SAFE_INTEGER.toString(),Wb=Fh?BigInt(Number.MIN_SAFE_INTEGER):void 0,Xb=Number.MAX_SAFE_INTEGER.toString(),qb=Fh?BigInt(Number.MAX_SAFE_INTEGER):void 0;function f0(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}var Yb=typeof Uint8Array.prototype.slice=="function",Zb,Re=0,Xe=0;function p0(e){let t=e>>>0;Re=t,Xe=(e-t)/4294967296>>>0}function _o(e){if(e<0){p0(-e);let[t,n]=df(Re,Xe);Re=t>>>0,Xe=n>>>0}else p0(e)}function hf(e){let t=Zb||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),Xe=0,Re=t.getUint32(0,!0)}function Tg(e,t){let n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Ha(e,t)}function Kb(e,t){return qn(Eo()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):Ha(e,t))}function wg(e,t){return Eo()?qn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):qn(uf(e,t))}function Ha(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else Eo()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+m0(n)+m0(e));return n}function m0(e){return e=String(e),"0000000".slice(e.length)+e}function uf(e,t){if(2147483648&t)if(Eo())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,i]=df(e,t);e="-"+Ha(n,i)}else e=Ha(e,t);return e}function Oh(e){if(e.length<16)_o(Number(e));else if(Eo())e=BigInt(e),Re=Number(e&BigInt(4294967295))>>>0,Xe=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]==="-");Xe=Re=0;let n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){let r=Number(e.slice(i,s));Xe*=1e6,Re=1e6*Re+r,Re>=4294967296&&(Xe+=Math.trunc(Re/4294967296),Xe>>>=0,Re>>>=0)}if(t){let[i,s]=df(Re,Xe);Re=i,Xe=s}}}function df(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function Mi(e){return Array.prototype.slice.call(e)}var Ka=typeof BigInt=="function"?BigInt.asIntN:void 0,jb=typeof BigInt=="function"?BigInt.asUintN:void 0,dr=Number.isSafeInteger,Bh=Number.isFinite,xo=Math.trunc,Jb=qn(0);function Fa(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function Oi(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Wa(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function Ag(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}var $b=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ja(e){switch(typeof e){case"bigint":return!0;case"number":return Bh(e);case"string":return $b.test(e);default:return!1}}function Ao(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Bh(e)?0|e:void 0}function Cg(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Bh(e)?e>>>0:void 0}function Rg(e){let t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(Oh(e),uf(Re,Xe))}function ff(e){if(e=xo(e),!dr(e)){_o(e);var t=Re,n=Xe;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=Tg(t,n))=="number"?e?-t:t:e?"-"+t:t}return e}function Pg(e){var t=xo(Number(e));return dr(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Rg(e))}function Ig(e){var t=xo(Number(e));return dr(t)?qn(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Eo()?qn(Ka(64,BigInt(e))):qn(Rg(e)))}function Lg(e){return dr(e)?e=qn(ff(e)):(e=xo(e),dr(e)?e=String(e):(_o(e),e=uf(Re,Xe)),e=qn(e)),e}function Ah(e){let t=typeof e;return e==null?e:t==="bigint"?qn(Ka(64,e)):ja(e)?t==="string"?Ig(e):Lg(e):void 0}function Dg(e){if(typeof e!="string")throw Error();return e}function Ja(e){if(e!=null&&typeof e!="string")throw Error();return e}function un(e){return e==null||typeof e=="string"?e:void 0}function pf(e,t,n,i){return e!=null&&e[mo]===go?e:Array.isArray(e)?((i=(n=0|e[At])|32&i|2&i)!==n&&rn(e,i),new t(e)):(n?2&i?((e=t[c0])||(Za((e=new t).v),e=t[c0]=e),t=e):t=new t:t=void 0,t)}function Qb(e,t,n){if(t)t:{if(!ja(t=e))throw Vd("int64");switch(typeof t){case"string":t=Ig(t);break t;case"bigint":t=qn(Ka(64,t));break t;default:t=Lg(t)}}else t=Ah(e);return(e=t)==null?n?Jb:void 0:e}var tS={},eS=(function(){try{return Uh(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Ba=class{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}},nS=eS?(Object.setPrototypeOf(Ba.prototype,Map.prototype),Object.defineProperties(Ba.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Ba):class extends Map{constructor(){super()}};function g0(e){return e}function Ld(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var ss=class extends nS{constructor(e,t,n=g0,i=g0){super(),this.J=0|e[At],this.K=t,this.S=n,this.fa=this.K?iS:i;for(let s=0;s<e.length;s++){let r=e[s],o=n(r[0],!1,!0),a=r[1];t?a===void 0&&(a=null):a=i(r[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(e){return Ga(Array.from(super.entries(),e))}clear(){Ld(this),super.clear()}delete(e){return Ld(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new wh(e,sS,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new wh(e,ss.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach(((n,i,s)=>{e.call(t,s.get(i),i,s)})):super.forEach(e,t)}set(e,t){return Ld(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){let t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);let t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function iS(e,t,n,i,s,r){return e=pf(e,i,n,r),s&&(e=gf(e)),e}function sS(e){return[e,this.get(e)]}var rS;function _0(){return rS||=new ss(Za([]),void 0,void 0,void 0,tS)}function kh(e){return Xn?e[Xn]:void 0}function Ch(e,t){for(let n in e)!isNaN(n)&&t(e,+n,e[n])}ss.prototype.toJSON=void 0;var Wd=class{},oS={Ka:!0};function aS(e,t){t<100||po(Bb,1)}function zh(e,t,n,i){let s=i!==void 0;i=!!i;var r,o=Xn;!s&&To&&o&&(r=e[o])&&Ch(r,aS),o=[];var a=e.length;let l;r=4294967295;let c=!1,u=!!(64&t),d=u?128&t?0:-1:void 0;1&t||(l=a&&e[a-1],l!=null&&typeof l=="object"&&l.constructor===Object?r=--a:l=void 0,!u||128&t||s||(c=!0,r=r-d+d)),t=void 0;for(var h=0;h<a;h++){let p=e[h];if(p!=null&&(p=n(p,i))!=null)if(u&&h>=r){let _=h-d;(t??={})[_]=p}else o[h]=p}if(l)for(let p in l){if((a=l[p])==null||(a=n(a,i))==null)continue;let _;h=+p,u&&!Number.isNaN(h)&&(_=h+d)<r?o[_]=a:(t??={})[p]=a}return t&&(c?o.push(t):o[r]=t),s&&Xn&&(e=kh(e))&&e instanceof Wd&&(o[Xn]=(function(p){let _=new Wd;return Ch(p,((M,m,f)=>{_[m]=Mi(f)})),_.da=p.da,_})(e)),o}function lS(e){return e[0]=Xa(e[0]),e[1]=Xa(e[1]),e}function Xa(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return Hd(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[At];return e.length===0&&1&t?void 0:zh(e,t,Xa)}if(e!=null&&e[mo]===go)return Ug(e);if(e instanceof Bi){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(_g){for(var n="",i=0,s=t.length-10240;i<s;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),gg(),n=mg[n],i=Array(Math.floor(t.length/3)),s=n[64]||"";let c=0,u=0;for(;c<t.length-2;c+=3){var r=t[c],o=t[c+1],a=t[c+2],l=n[r>>2];r=n[(3&r)<<4|o>>4],o=n[(15&o)<<2|a>>6],a=n[63&a],i[u++]=l+r+o+a}switch(l=0,a=s,t.length-c){case 2:a=n[(15&(l=t[c+1]))<<2]||s;case 1:t=t[c],i[u]=n[t>>2]+n[(3&t)<<4|l>>4]+a+s}t=i.join("")}e=e.g=t}return e}return e instanceof ss?e=e.size!==0?e.V(lS):void 0:void 0}return e}var cS,hS;function Ug(e){return zh(e=e.v,0|e[At],Xa)}function rr(e,t){return Ng(e,t[0],t[1])}function Ng(e,t,n,i=0){if(e==null){var s=32;n?(e=[n],s|=128):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(s=0|e[At],r0&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(r0)throw Error("carr");po(kb,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&rn(e,s|i),e;if(n&&(s|=128,n!==e[0]))throw Error("mid");t:{s|=64;var r=(n=e).length;if(r){var o=r-1;let l=n[o];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((o-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var a in l)(r=+a)<o&&(n[r+t]=l[a],delete l[a]);s=-16760833&s|(1023&o)<<14;break t}}if(t){if((a=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&a)<<14}}}return rn(e,64|s|i),e}function uS(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[At];return e.length===0&&1&n?void 0:x0(e,n,t)}if(e!=null&&e[mo]===go)return v0(e);if(e instanceof ss){if(2&(t=e.J))return e;if(!e.size)return;if(n=Za(e.V()),e.K)for(e=0;e<n.length;e++){let i=n[e],s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[mo]===go?v0(s):Array.isArray(s)?x0(s,0|s[At],!!(32&t)):void 0,i[1]=s}return n}return e instanceof Bi?e:void 0}function x0(e,t,n){return 2&t||(!n||4096&t||16&t?e=Co(e,t,!1,n&&!(16&t)):(Ya(e,34),4&t&&Object.freeze(e))),e}function mf(e,t,n){return e=new e.constructor(t),n&&(e.h=ur),e.m=ur,e}function v0(e){let t=e.v,n=0|t[At];return Yn(e,n)?e:_f(e,t,n)?mf(e,t):Co(t,n)}function Co(e,t,n,i){return i??=!!(34&t),e=zh(e,t,uS,i),i=32,n&&(i|=2),rn(e,t=16769217&t|i),e}function gf(e){let t=e.v,n=0|t[At];return Yn(e,n)?_f(e,t,n)?mf(e,t,!0):new e.constructor(Co(t,n,!1)):e}function Ro(e){if(e.h!==ur)return!1;var t=e.v;return Ya(t=Co(t,0|t[At]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function Po(e){if(!Ro(e)&&Yn(e,0|e.v[At]))throw Error()}function pr(e,t){t===void 0&&(t=0|e[At]),32&t&&!(4096&t)&&rn(e,4096|t)}function _f(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(rn(t,2|n),e.h=ur,!0)}var Fg=qn(0),Ds={};function Pe(e,t,n,i,s){if((t=rs(e.v,t,n,s))!==null||i&&e.m!==ur)return t}function rs(e,t,n,i){if(t===-1)return null;let s=t+(n?0:-1),r=e.length-1,o,a;if(!(r<1+(n?0:-1))){if(s>=r)if(o=e[r],o!=null&&typeof o=="object"&&o.constructor===Object)n=o[t],a=!0;else{if(s!==r)return;n=o}else n=e[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return a?o[t]=i:e[s]=i,i}return n}}function de(e,t,n,i){Po(e),nn(e=e.v,0|e[At],t,n,i)}function nn(e,t,n,i,s){let r=n+(s?0:-1);var o=e.length-1;if(o>=1+(s?0:-1)&&r>=o){let a=e[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[n]=i,t}return r<=o?(e[r]=i,t):(i!==void 0&&(n>=(o=(t??=0|e[At])>>14&1023||536870912)?i!=null&&(e[o+(s?0:-1)]={[n]:i}):e[r]=i),t)}function ir(){return zb===void 0?2:4}function sr(e,t,n,i,s){let r=e.v,o=0|r[At];i=Yn(e,o)?1:i,s=!!s||i===3,i===2&&Ro(e)&&(r=e.v,o=0|r[At]);let a=(e=xf(r,t))===fr?7:0|e[At],l=vf(a,o);var c=!(4&l);if(c){4&l&&(e=Mi(e),a=0,l=ar(l,o),o=nn(r,o,t,e));let u=0,d=0;for(;u<e.length;u++){let h=n(e[u]);h!=null&&(e[d++]=h)}d<u&&(e.length=d),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==a&&(rn(e,l),2&l&&Object.freeze(e)),Og(e,l,r,o,t,i,c,s)}function Og(e,t,n,i,s,r,o,a){let l=t;return r===1||r===4&&(2&t||!(16&t)&&32&i)?or(t)||((t|=!e.length||o&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==l&&rn(e,t),Object.freeze(e)):(r===2&&or(t)&&(e=Mi(e),l=0,t=ar(t,i),i=nn(n,i,s,e)),or(t)||(a||(t|=16),t!==l&&rn(e,t))),2&t||!(4096&t||16&t)||pr(n,i),e}function xf(e,t,n){return e=rs(e,t,n),Array.isArray(e)?e:fr}function vf(e,t){return 2&t&&(e|=2),1|e}function or(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function Bg(e){return cf(e,!0)}function kg(e){e=Mi(e);for(let t=0;t<e.length;t++){let n=e[t]=Mi(e[t]);Array.isArray(n[1])&&(n[1]=Za(n[1]))}return Ga(e)}function Ns(e,t,n,i){Po(e),nn(e=e.v,0|e[At],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Io(e,t,n){if(2&t)throw Error();let i=wo(t),s=xf(e,n,i),r=s===fr?7:0|s[At],o=vf(r,t);return(2&o||or(o)||16&o)&&(o===r||or(o)||rn(s,o),s=Mi(s),r=0,o=ar(o,t),nn(e,t,n,s,i)),o&=-13,o!==r&&rn(s,o),s}function Dd(e,t){var n=P_;return Mf(yf(e=e.v),e,void 0,n)===t?t:-1}function yf(e){if(To)return e[Da]??(e[Da]=new Map);if(Da in e)return e[Da];let t=new Map;return Object.defineProperty(e,Da,{value:t}),t}function zg(e,t,n,i,s){let r=yf(e),o=Mf(r,e,t,n,s);return o!==i&&(o&&(t=nn(e,t,o,void 0,s)),r.set(n,i)),t}function Mf(e,t,n,i,s){let r=e.get(i);if(r!=null)return r;r=0;for(let o=0;o<i.length;o++){let a=i[o];rs(t,a,s)!=null&&(r!==0&&(n=nn(t,n,r,void 0,s)),r=a)}return e.set(i,r),r}function bf(e,t,n){let i=0|e[At],s=wo(i),r=rs(e,n,s),o;if(r!=null&&r[mo]===go){if(!Yn(r))return Ro(r),r.v;o=r.v}else Array.isArray(r)&&(o=r);if(o){let a=0|o[At];2&a&&(o=Co(o,a))}return o=rr(o,t),o!==r&&nn(e,i,n,o,s),o}function Vg(e,t,n,i,s){let r=!1;if((i=rs(e,i,s,(o=>{let a=pf(o,n,!1,t);return r=a!==o&&a!=null,a})))!=null)return r&&!Yn(i)&&pr(e,t),i}function re(e,t,n,i){let s=e.v,r=0|s[At];if((t=Vg(s,r,t,n,i))==null)return t;if(r=0|s[At],!Yn(e,r)){let o=gf(t);o!==t&&(Ro(e)&&(s=e.v,r=0|s[At]),r=nn(s,r,n,t=o,i),pr(s,r))}return t}function Gg(e,t,n,i,s,r,o,a){var l=Yn(e,n);r=l?1:r,o=!!o||r===3,l=a&&!l,(r===2||l)&&Ro(e)&&(n=0|(t=e.v)[At]);var c=(e=xf(t,s))===fr?7:0|e[At],u=vf(c,n);if(a=!(4&u)){var d=e,h=n;let p=!!(2&u);p&&(h|=2);let _=!p,M=!0,m=0,f=0;for(;m<d.length;m++){let b=pf(d[m],i,!1,h);if(b instanceof i){if(!p){let A=Yn(b);_&&=!A,M&&=A}d[f++]=b}}f<m&&(d.length=f),u|=4,u=M?-4097&u:4096|u,u=_?8|u:-9&u}if(u!==c&&(rn(e,u),2&u&&Object.freeze(e)),l&&!(8&u||!e.length&&(r===1||r===4&&(2&u||!(16&u)&&32&n)))){for(or(u)&&(e=Mi(e),u=ar(u,n),n=nn(t,n,s,e)),i=e,l=u,c=0;c<i.length;c++)(d=i[c])!==(u=gf(d))&&(i[c]=u);l|=8,rn(e,u=l=i.length?4096|l:-4097&l)}return Og(e,u,t,n,s,r,a,o)}function os(e,t,n){let i=e.v;return Gg(e,i,0|i[At],t,n,ir(),!1,!0)}function Hg(e){return e==null&&(e=void 0),e}function Nt(e,t,n,i,s){return de(e,n,i=Hg(i),s),i&&!Yn(i)&&pr(e.v),e}function ka(e,t,n,i){t:{var s=i=Hg(i);Po(e);let r=e.v,o=0|r[At];if(s==null){let a=yf(r);if(Mf(a,r,o,n)!==t)break t;a.set(n,0)}else o=zg(r,o,n,t);nn(r,o,t,s)}i&&!Yn(i)&&pr(e.v)}function ar(e,t){return-273&(2&t?2|e:-3&e)}function Sf(e,t,n,i){var s=i;Po(e),e=Gg(e,i=e.v,0|i[At],n,t,2,!0),s=s??new n,e.push(s),t=n=e===fr?7:0|e[At],(s=Yn(s))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&rn(e,n),s||pr(i)}function li(e,t,n){return Ao(Pe(e,t,void 0,n))}function Ve(e,t){return Pe(e,t,void 0,void 0,Oi)??0}function as(e,t,n){if(n!=null){if(typeof n!="number"||!Bh(n))throw Vd("int32");n|=0}de(e,t,n)}function Dt(e,t,n){de(e,t,Fa(n))}function Zn(e,t,n){Ns(e,t,Ja(n),"")}function Rh(e,t,n){{Po(e);let o=e.v,a=0|o[At];if(n==null)nn(o,a,t);else{var i=e=n===fr?7:0|n[At],s=or(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=Mi(n),i=0,e=ar(e,a),r=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,s=0;s<n.length;s++){let l=n[s],c=Dg(l);Object.is(l,c)||(r&&(n=Mi(n),i=0,e=ar(e,a),r=!1),n[s]=c)}e!==i&&(r&&(n=Mi(n),e=ar(e,a)),rn(n,e)),nn(o,a,t,n)}}}function Vh(e,t,n){Po(e),sr(e,t,un,2,!0).push(Dg(n))}var oo=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function Ef(e,t){if(typeof e=="string")return new oo(xg(e),t);if(Array.isArray(e))return new oo(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new oo(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new oo(e,!1);if(e.constructor===Bi)return t=lf(e)||new Uint8Array(0),new oo(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new oo(e,!1);throw Error()}function Tf(e,t){let n,i=0,s=0,r=0,o=e.h,a=e.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);if(r>32)for(s|=(127&n)>>4,r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(lr(e,a),!(128&n))return t(i>>>0,s>>>0);throw Error()}function wf(e){let t=0,n=e.g,i=n+10,s=e.h;for(;n<i;){let r=s[n++];if(t|=r,(128&r)==0)return lr(e,n),!!(127&t)}throw Error()}function Os(e){let t=e.h,n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return lr(e,n),s}function ki(e){return Os(e)>>>0}function Ph(e){var t=e.h;let n=e.g;var i=t[n],s=t[n+1];let r=t[n+2];return t=t[n+3],lr(e,e.g+4),e=2*((s=(i<<0|s<<8|r<<16|t<<24)>>>0)>>31)+1,i=s>>>23&255,s&=8388607,i==255?s?NaN:e*(1/0):i==0?1401298464324817e-60*e*s:e*Math.pow(2,i-150)*(s+8388608)}function dS(e){return Os(e)}function lr(e,t){if(e.g=t,t>e.l)throw Error()}function Wg(e,t){if(t<0)throw Error();let n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function Xg(e,t){if(t==0)return hr();var n=Wg(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):Yb?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?hr():new Bi(n,fo)}var y0=[];function qg(e,t,n,i){if(Ih.length){let s=Ih.pop();return s.o(i),s.g.init(e,t,n,i),s}return new fS(e,t,n,i)}function Yg(e){e.g.clear(),e.l=-1,e.h=-1,Ih.length<100&&Ih.push(e)}function Zg(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=ki(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function bh(e){switch(e.h){case 0:e.h!=0?bh(e):wf(e.g);break;case 1:lr(e=e.g,e.g+8);break;case 2:if(e.h!=2)bh(e);else{var t=ki(e.g);lr(e=e.g,e.g+t)}break;case 5:lr(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!Zg(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}bh(e)}break;default:throw Error()}}function $a(e,t,n){let i=e.g.l;var s=ki(e.g);let r=(s=e.g.g+s)-i;if(r<=0&&(e.g.l=s,n(t,e,void 0,void 0,void 0),r=s-e.g.g),r)throw Error();return e.g.g=s,e.g.l=i,t}function Af(e){var t=ki(e.g),n=Wg(e=e.g,t);if(e=e.h,wb){var i,s=e;(i=Id)||(i=Id=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(a){if(gh===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),gh=!0}catch{gh=!1}}throw!gh&&(Id=void 0),a}}else{t=(r=n)+t,n=[];let a,l=null;for(;r<t;){var o=e[r++];o<128?n.push(o):o<224?r>=t?er():(a=e[r++],o<194||(192&a)!=128?(r--,er()):n.push((31&o)<<6|63&a)):o<240?r>=t-1?er():(a=e[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[r++]))!=128?(r--,er()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=t-2?er():(a=e[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,er()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):er(),n.length>=8192&&(l=s0(l,n),n.length=0)}r=s0(l,n)}return r}function Kg(e){let t=ki(e.g);return Xg(e.g,t)}function Gh(e,t,n){var i=ki(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var fS=class{constructor(e,t,n,i){if(y0.length){let s=y0.pop();s.init(e,t,n,i),e=s}else e=new class{constructor(s,r,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(s,r,o,a)}init(s,r,o,{Y:a=!1,ea:l=!1}={}){this.Y=a,this.ea=l,s&&(s=Ef(s,this.ea),this.h=s.buffer,this.j=s.g,this.m=r||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:e=!1}={}){this.ha=e}},Ih=[];function M0(e){return e?/^\d+$/.test(e)?(Oh(e),new Xd(Re,Xe)):null:pS||=new Xd(0,0)}var Xd=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},pS;function b0(e){return e?/^-?\d+$/.test(e)?(Oh(e),new qd(Re,Xe)):null:mS||=new qd(0,0)}var qd=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}},mS;function co(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Lo(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Hh(e,t){if(t>=0)Lo(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Cf(e){var t=Re;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function vo(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function ci(e,t,n){Lo(e.g,8*t+n)}function Rf(e,t){return ci(e,t,2),t=e.g.end(),vo(e,t),t.push(e.h),t}function Pf(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Wh(e,t,n){ci(e,t,2),Lo(e.g,n.length),vo(e,e.g.end()),vo(e,n)}function Lh(e,t,n,i){n!=null&&(t=Rf(e,t),i(n,e),Pf(e,t))}function Vi(){let e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var If=Vi(),jg=Vi(),Lf=Vi(),Df=Vi(),Uf=Vi(),Jg=Vi(),gS=Vi(),Xh=Vi(),$g=Vi(),Qg=Vi();function Gi(e,t,n){var i=e.v;Xn&&Xn in i&&(i=i[Xn])&&delete i[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var Ct=class{constructor(e,t){this.v=Ng(e,t,void 0,2048)}toJSON(){return Ug(this)}j(){var e=jS,t=this.v,n=e.g,i=Xn;if(To&&i&&t[i]?.[n]!=null&&po(Ob,3),t=e.g,h0&&Xn&&h0===void 0&&(i=(n=this.v)[Xn])&&(i=i.da))try{i(n,t,oS)}catch(s){pg(s)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){let e=this.v,t=0|e[At];return _f(this,e,t)?mf(this,e,!0):new this.constructor(Co(e,t,!1))}};Ct.prototype[mo]=go,Ct.prototype.toString=function(){return this.v.toString()};var Do=class{constructor(e,t,n){this.g=e,this.h=t,e=If,this.l=!!e&&n===e||!1}};function qh(e,t){return new Do(e,t,If)}function t_(e,t,n,i,s){Lh(e,n,s_(t,i),s)}var _S=qh((function(e,t,n,i,s){return e.h===2&&($a(e,bf(t,i,n),s),!0)}),t_),xS=qh((function(e,t,n,i,s){return e.h===2&&($a(e,bf(t,i,n),s),!0)}),t_),Yh=Symbol(),Zh=Symbol(),Yd=Symbol(),S0=Symbol(),E0=Symbol(),e_,n_;function mr(e,t,n,i){var s=i[e];if(s)return s;(s={}).qa=i,s.T=(function(d){switch(typeof d){case"boolean":return cS||=[0,void 0,!0];case"number":return d>0?void 0:d===0?hS||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ba=r,typeof(r=i[++o])=="function"&&(s.ma=!0,e_??=r,n_??=i[o+1],r=i[o+=2]));let a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)a[r[l]]=r;r=i[++o]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=i[++o]);var c=void 0;if(r instanceof Do?d=r:(d=_S,o--),d?.l){r=i[++o],c=i;var u=o;typeof r=="function"&&(r=r(),c[u]=r),c=r}for(u=l+1,typeof(r=i[++o])=="number"&&r<0&&(u-=r,r=i[++o]);l<u;l++){let h=a[l];c?n(s,l,d,c,h):t(s,l,d,h)}}return i[e]=s}function i_(e){return Array.isArray(e)?e[0]instanceof Do?e:[xS,e]:[e,void 0]}function s_(e,t){return e instanceof Ct?e.v:Array.isArray(e)?rr(e,t):void 0}function Nf(e,t,n,i){let s=n.g;e[t]=i?(r,o,a)=>s(r,o,a,i):s}function Ff(e,t,n,i,s){let r=n.g,o,a;e[t]=(l,c,u)=>r(l,c,u,a||=mr(Zh,Nf,Ff,i).T,o||=Of(i),s)}function Of(e){let t=e[Yd];if(t!=null)return t;let n=mr(Zh,Nf,Ff,e);return t=n.ma?(i,s)=>e_(i,s,n):(i,s)=>{for(;Zg(s)&&s.h!=4;){var r=s.l,o=n[r];if(o==null){var a=n.ba;a&&(a=a[r])&&(a=yS(a))!=null&&(o=n[r]=a)}if(o==null||!o(s,i,r)){if(o=(a=s).m,bh(a),a.ha)var l=void 0;else l=a.g.g-o,a.g.g=o,l=Xg(a.g,l);o=void 0,a=i,l&&((o=a[Xn]??(a[Xn]=new Wd))[r]??(o[r]=[])).push(l)}}return(i=kh(i))&&(i.da=n.qa[E0]),!0},e[Yd]=t,e[E0]=vS.bind(e),t}function vS(e,t,n,i){var s=this[Zh];let r=this[Yd],o=rr(void 0,s.T),a=kh(e);if(a){var l=!1,c=s.ba;if(c){if(s=(u,d,h)=>{if(h.length!==0)if(c[d])for(let p of h){u=qg(p);try{l=!0,r(o,u)}finally{Yg(u)}}else i?.(e,d,h)},t==null)Ch(a,s);else if(a!=null){let u=a[t];u&&s(a,t,u)}if(l){let u=0|e[At];if(2&u&&2048&u&&!n?.Ka)throw Error();let d=wo(u),h=(p,_)=>{if(rs(e,p,d)!=null){if(n?.Qa===1)return;throw Error()}_!=null&&(u=nn(e,u,p,_,d)),delete a[p]};t==null?Sg(o,0|o[At],((p,_)=>{h(p,_)})):h(t,rs(o,t,d))}}}}function yS(e){let t=(e=i_(e))[0].g;if(e=e[1]){let n=Of(e),i=mr(Zh,Nf,Ff,e).T;return(s,r,o)=>t(s,r,o,i,n)}return t}function Kh(e,t,n){e[t]=n.h}function jh(e,t,n,i){let s,r,o=n.h;e[t]=(a,l,c)=>o(a,l,c,r||=mr(Yh,Kh,jh,i).T,s||=r_(i))}function r_(e){let t=e[S0];if(!t){let n=mr(Yh,Kh,jh,e);t=(i,s)=>o_(i,s,n),e[S0]=t}return t}function o_(e,t,n){Sg(e,0|e[At],((i,s)=>{if(s!=null){var r=(function(o,a){var l=o[a];if(l)return l;if((l=o.ba)&&(l=l[a])){var c=(l=i_(l))[0].h;if(l=l[1]){let u=r_(l),d=mr(Yh,Kh,jh,l).T;l=o.ma?n_(d,u):(h,p,_)=>c(h,p,_,d,u)}else l=c;return o[a]=l}})(n,i);r?r(t,s,i):i<500||po(Gd,3)}})),(e=kh(e))&&Ch(e,((i,s,r)=>{for(vo(t,t.g.end()),i=0;i<r.length;i++)vo(t,lf(r[i])||new Uint8Array(0))}))}var MS=qn(0);function Uo(e,t){if(Array.isArray(t)){var n=0|t[At];if(4&n)return t;for(var i=0,s=0;i<t.length;i++){let r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),(e=-1537&(5|n))!==n&&rn(t,e),2&e&&Object.freeze(t),t}}function Mn(e,t,n){return new Do(e,t,n)}function No(e,t,n){return new Do(e,t,n)}function bn(e,t,n){nn(e,0|e[At],t,n,wo(0|e[At]))}var bS=qh((function(e,t,n,i,s){if(e.h!==2)return!1;if(e=Mi(e=$a(e,rr([void 0,void 0],i),s)),s=wo(i=0|t[At]),2&i)throw Error();let r=rs(t,n,s);if(r instanceof ss)(2&r.J)!=0?(r=r.V(),r.push(e),nn(t,i,n,r,s)):r.Ma(e);else if(Array.isArray(r)){var o=0|r[At];8192&o||rn(r,o|=8192),2&o&&(r=kg(r),nn(t,i,n,r,s)),r.push(e)}else nn(t,i,n,Ga([e]),s);return!0}),(function(e,t,n,i,s){if(t instanceof ss)t.forEach(((r,o)=>{Lh(e,n,rr([o,r],i),s)}));else if(Array.isArray(t)){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)&&Lh(e,n,rr(o,i),s)}Ga(t)}}));function a_(e,t,n){(t=Oi(t))!=null&&(ci(e,n,5),e=e.g,hf(t),Cf(e))}function l_(e,t,n){if(t=(function(i){if(i==null)return i;let s=typeof i;if(s==="bigint")return String(Ka(64,i));if(ja(i)){if(s==="string")return Pg(i);if(s==="number")return ff(i)}})(t),t!=null&&(typeof t=="string"&&b0(t),t!=null))switch(ci(e,n,0),typeof t){case"number":e=e.g,_o(t),co(e,Re,Xe);break;case"bigint":n=BigInt.asUintN(64,t),n=new qd(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),co(e.g,n.h,n.g);break;default:n=b0(t),co(e.g,n.h,n.g)}}function c_(e,t,n){(t=Ao(t))!=null&&t!=null&&(ci(e,n,0),Hh(e.g,t))}function h_(e,t,n){(t=Ag(t))!=null&&(ci(e,n,0),e.g.g.push(t?1:0))}function u_(e,t,n){(t=un(t))!=null&&Wh(e,n,fg(t))}function d_(e,t,n,i,s){Lh(e,n,s_(t,i),s)}function f_(e,t,n){(t=t==null||typeof t=="string"||t instanceof Bi?t:void 0)!=null&&Wh(e,n,Ef(t,!0).buffer)}function p_(e,t,n){(t=Cg(t))!=null&&t!=null&&(ci(e,n,0),Lo(e.g,t))}function m_(e,t,n){return(e.h===5||e.h===2)&&(t=Io(t,0|t[At],n),e.h==2?Gh(e,Ph,t):t.push(Ph(e.g)),!0)}var qe=Mn((function(e,t,n){return e.h===5&&(bn(t,n,Ph(e.g)),!0)}),a_,Xh),SS=No(m_,(function(e,t,n){if((t=Uo(Oi,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(ci(i,s,5),i=i.g,hf(r),Cf(i))}}),Xh),Bf=No(m_,(function(e,t,n){if((t=Uo(Oi,t))!=null&&t.length){ci(e,n,2),Lo(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,hf(t[i]),Cf(n)}}),Xh),ES=Mn((function(e,t,n){return e.h===5&&(bn(t,n,(e=Ph(e.g))===0?void 0:e),!0)}),a_,Xh),Bs=Mn((function(e,t,n){return e.h!==0?e=!1:(bn(t,n,Tf(e.g,wg)),e=!0),e}),l_,Jg),Ud=Mn((function(e,t,n){return e.h!==0?t=!1:(bn(t,n,(e=Tf(e.g,wg))===MS?void 0:e),t=!0),t}),l_,Jg),TS=Mn((function(e,t,n){return e.h!==0?e=!1:(bn(t,n,Tf(e.g,Kb)),e=!0),e}),(function(e,t,n){if(t=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(jb(64,i));if(ja(i)){if(s==="string")return s=xo(Number(i)),dr(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),(s=i[0]!=="-"&&((s=i.length)<20||s===20&&i<="18446744073709551615"))||(Oh(i),i=Ha(Re,Xe))),i;if(s==="number")return(i=xo(i))>=0&&dr(i)||(_o(i),i=Tg(Re,Xe)),i}})(t),t!=null&&(typeof t=="string"&&M0(t),t!=null))switch(ci(e,n,0),typeof t){case"number":e=e.g,_o(t),co(e,Re,Xe);break;case"bigint":n=BigInt.asUintN(64,t),n=new Xd(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),co(e.g,n.h,n.g);break;default:n=M0(t),co(e.g,n.h,n.g)}}),gS),en=Mn((function(e,t,n){return e.h===0&&(bn(t,n,Os(e.g)),!0)}),c_,Df),Qa=No((function(e,t,n){return(e.h===0||e.h===2)&&(t=Io(t,0|t[At],n),e.h==2?Gh(e,Os,t):t.push(Os(e.g)),!0)}),(function(e,t,n){if((t=Uo(Ao,t))!=null&&t.length){n=Rf(e,n);for(let i=0;i<t.length;i++)Hh(e.g,t[i]);Pf(e,n)}}),Df),lo=Mn((function(e,t,n){return e.h===0&&(bn(t,n,(e=Os(e.g))===0?void 0:e),!0)}),c_,Df),Ie=Mn((function(e,t,n){return e.h===0&&(bn(t,n,wf(e.g)),!0)}),h_,jg),cr=Mn((function(e,t,n){return e.h===0&&(bn(t,n,(e=wf(e.g))===!1?void 0:e),!0)}),h_,jg),vn=No((function(e,t,n){return e.h===2&&(e=Af(e),Io(t,0|t[At],n).push(e),!0)}),(function(e,t,n){if((t=Uo(un,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&Wh(i,s,fg(r))}}),Lf),Fs=Mn((function(e,t,n){return e.h===2&&(bn(t,n,(e=Af(e))===""?void 0:e),!0)}),u_,Lf),me=Mn((function(e,t,n){return e.h===2&&(bn(t,n,Af(e)),!0)}),u_,Lf),ln=(function(e,t,n=If){return new Do(e,t,n)})((function(e,t,n,i,s){return e.h===2&&(i=rr(void 0,i),Io(t,0|t[At],n).push(i),$a(e,i,s),!0)}),(function(e,t,n,i,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)d_(e,t[r],n,i,s);1&(e=0|t[At])||rn(t,1|e)}})),we=qh((function(e,t,n,i,s,r){if(e.h!==2)return!1;let o=0|t[At];return zg(t,o,r,n,wo(o)),$a(e,t=bf(t,i,n),s),!0}),d_),g_=Mn((function(e,t,n){return e.h===2&&(bn(t,n,Kg(e)),!0)}),f_,$g),wS=No((function(e,t,n){return(e.h===0||e.h===2)&&(t=Io(t,0|t[At],n),e.h==2?Gh(e,ki,t):t.push(ki(e.g)),!0)}),(function(e,t,n){if((t=Uo(Cg,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(ci(i,s,0),Lo(i.g,r))}}),Uf),AS=Mn((function(e,t,n){return e.h===0&&(bn(t,n,(e=ki(e.g))===0?void 0:e),!0)}),p_,Uf),yn=Mn((function(e,t,n){return e.h===0&&(bn(t,n,Os(e.g)),!0)}),(function(e,t,n){(t=Ao(t))!=null&&(t=parseInt(t,10),ci(e,n,0),Hh(e.g,t))}),Qg),Zd=class{constructor(t,n){var i=jn;this.g=t,this.h=n,this.m=re,this.j=Nt,this.defaultValue=void 0,this.l=i.Oa!=null?Eg:void 0}register(){Uh(this)}};function Hi(e,t){return new Zd(e,t)}function zs(e,t){return(n,i)=>{{let r={ea:!0};i&&Object.assign(r,i),n=qg(n,void 0,void 0,r);try{let o=new e,a=o.v;Of(t)(a,n);var s=o}finally{Yg(n)}}return s}}function Jh(e){return function(){let t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){let o=this.g;return this.g=[],o}}}};o_(this.v,t,mr(Yh,Kh,jh,e)),vo(t,t.g.end());let n=new Uint8Array(t.h),i=t.l,s=i.length,r=0;for(let o=0;o<s;o++){let a=i[o];n.set(a,r),r+=a.length}return t.l=[n],n}}var T0=class extends Ct{constructor(e){super(e)}},w0=[0,Fs,Mn((function(e,t,n){return e.h===2&&(bn(t,n,(e=Kg(e))===hr()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof Ct){let i=t.Ra;return void(i?(t=i(t),t!=null&&Wh(e,n,Ef(t,!0).buffer)):po(Gd,3))}if(Array.isArray(t))return void po(Gd,3)}f_(e,t,n)}),$g)],Nd,A0=globalThis.trustedTypes;function C0(e){var t;return Nd===void 0&&(Nd=(function(){let n=null;if(!A0)return n;try{let i=s=>s;n=A0.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),e=(t=Nd)?t.createScriptURL(e):e,new class{constructor(n){this.g=n}toString(){return this.g+""}}(e)}function _h(e,...t){if(t.length===0)return C0(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return C0(n)}var __=[0,en,yn,Ie,-1,Qa,yn,-1,Ie],CS=class extends Ct{constructor(e){super(e)}},x_=[0,Ie,me,Ie,yn,-1,No((function(e,t,n){return(e.h===0||e.h===2)&&(t=Io(t,0|t[At],n),e.h==2?Gh(e,dS,t):t.push(Os(e.g)),!0)}),(function(e,t,n){if((t=Uo(Ao,t))!=null&&t.length){n=Rf(e,n);for(let i=0;i<t.length;i++)Hh(e.g,t[i]);Pf(e,n)}}),Qg),me,-1,[0,Ie,-1],yn,Ie,-1],v_=[0,3,Ie,-1,2,[0,[2],en,we,[0,Mn((function(e,t,n){return e.h===0&&(bn(t,n,ki(e.g)),!0)}),p_,Uf)]],[0,yn,Ie,yn,Ie,yn,Ie,me,-1],[0,[3,4],me,-1,we,[0,en],we,[0,yn]],[0]],y_=[0,me,-2],R0=class extends Ct{constructor(e){super(e)}},M_=[0],b_=[0,en,Ie,1,Ie,-4],jn=class extends Ct{constructor(e){super(e,2)}},sn={};sn[336783863]=[0,me,Ie,-1,en,[0,[1,2,3,4,5,6,7,8,9],we,M_,we,x_,we,y_,we,b_,we,__,we,[0,me,-2],we,[0,me,yn],we,v_,we,[0,yn,-1,Ie]],[0,me],Ie,[0,[1,3],[2,4],we,[0,Qa],-1,we,[0,vn],-1,ln,[0,me,-1]],me];var P0=[0,Ud,-1,cr,-3,Ud,Qa,Fs,lo,Ud,-1,cr,lo,cr,-2,Fs];function Ae(e,t){Vh(e,3,t)}function te(e,t){Vh(e,4,t)}var Dn=class extends Ct{constructor(e){super(e,500)}o(e){return Nt(this,0,7,e)}},za=[-1,{}],I0=[0,me,1,za],L0=[0,me,vn,za];function hi(e,t){Sf(e,1,Dn,t)}function Le(e,t){Vh(e,10,t)}function oe(e,t){Vh(e,15,t)}var Jn=class extends Ct{constructor(e){super(e,500)}o(e){return Nt(this,0,1001,e)}},S_=[-500,ln,[-500,Fs,-1,vn,-3,[-2,sn,Ie],ln,w0,lo,-1,I0,L0,ln,[0,Fs,cr],Fs,P0,lo,vn,987,vn],4,ln,[-500,me,-1,[-1,{}],998,me],ln,[-500,me,vn,-1,[-2,{},Ie],997,vn,-1],lo,ln,[-500,me,vn,za,998,vn],vn,lo,I0,L0,ln,[0,Fs,-1,za],vn,-2,P0,Fs,-1,cr,[0,cr,AS],978,za,ln,w0];Jn.prototype.g=Jh(S_);var RS=zs(Jn,S_),PS=class extends Ct{constructor(e){super(e)}},E_=class extends Ct{constructor(e){super(e)}g(){return os(this,PS,1)}},T_=[0,ln,[0,en,qe,me,-1]],$h=zs(E_,T_),IS=class extends Ct{constructor(e){super(e)}},LS=class extends Ct{constructor(e){super(e)}},Fd=class extends Ct{constructor(e){super(e)}l(){return re(this,IS,2)}g(){return os(this,LS,5)}},w_=zs(class extends Ct{constructor(e){super(e)}},[0,vn,Qa,Bf,[0,yn,[0,en,-3],[0,qe,-3],[0,en,-1,[0,ln,[0,en,-2]]],ln,[0,qe,-1,me,qe]],me,-1,Bs,ln,[0,en,qe],vn,Bs]),A_=class extends Ct{constructor(e){super(e)}},ho=zs(class extends Ct{constructor(e){super(e)}},[0,ln,[0,qe,-4]]),C_=class extends Ct{constructor(e){super(e)}},tl=zs(class extends Ct{constructor(e){super(e)}},[0,ln,[0,qe,-4]]),DS=class extends Ct{constructor(e){super(e)}},US=[0,en,-1,Bf,yn],R_=class extends Ct{constructor(e){super(e)}};R_.prototype.g=Jh([0,qe,-4,Bs]);var NS=class extends Ct{constructor(e){super(e)}},FS=zs(class extends Ct{constructor(e){super(e)}},[0,ln,[0,1,en,me,T_],Bs]),D0=class extends Ct{constructor(e){super(e)}},OS=class extends Ct{constructor(e){super(e)}na(){let e=Pe(this,1,void 0,void 0,Bg);return e??hr()}},BS=class extends Ct{constructor(e){super(e)}},P_=[1,2],kS=zs(class extends Ct{constructor(e){super(e)}},[0,ln,[0,P_,we,[0,Bf],we,[0,g_],en,me],Bs]),kf=class extends Ct{constructor(e){super(e)}},I_=[0,me,en,qe,vn,-1],U0=class extends Ct{constructor(e){super(e)}},zS=[0,Ie,-1],N0=class extends Ct{constructor(e){super(e)}},Sh=[1,2,3,4,5,6],Dh=class extends Ct{constructor(e){super(e)}g(){return Pe(this,1,void 0,void 0,Bg)!=null}l(){return un(Pe(this,2))!=null}},Ne=class extends Ct{constructor(e){super(e)}g(){return Ag(Pe(this,2))??!1}},L_=[0,g_,me,[0,en,Bs,-1],[0,TS,Bs]],Ye=[0,L_,Ie,[0,Sh,we,b_,we,x_,we,__,we,M_,we,y_,we,v_],yn],Qh=class extends Ct{constructor(e){super(e)}},zf=[0,Ye,qe,-1,en],VS=Hi(502141897,Qh);sn[502141897]=zf;var GS=zs(class extends Ct{constructor(e){super(e)}},[0,[0,yn,-1,SS,wS],US]),D_=class extends Ct{constructor(e){super(e)}},U_=class extends Ct{constructor(e){super(e)}},Kd=[0,Ye,qe,[0,Ye],Ie],HS=Hi(508968150,U_);sn[508968150]=[0,Ye,zf,Kd,qe,[0,[0,L_]]],sn[508968149]=Kd;var ao=class extends Ct{constructor(e){super(e)}l(){return re(this,kf,2)}g(){de(this,2)}},N_=[0,Ye,I_];sn[478825465]=N_;var WS=class extends Ct{constructor(e){super(e)}},F_=class extends Ct{constructor(e){super(e)}},Vf=class extends Ct{constructor(e){super(e)}},Gf=class extends Ct{constructor(e){super(e)}},O_=class extends Ct{constructor(e){super(e)}},F0=[0,Ye,[0,Ye],N_,-1],B_=[0,Ye,qe,en],Hf=[0,Ye,qe],k_=[0,Ye,B_,Hf,qe],XS=Hi(479097054,O_);sn[479097054]=[0,Ye,k_,F0],sn[463370452]=F0,sn[464864288]=B_;var qS=Hi(462713202,Gf);sn[462713202]=k_,sn[474472470]=Hf;var YS=class extends Ct{constructor(e){super(e)}},z_=class extends Ct{constructor(e){super(e)}},V_=class extends Ct{constructor(e){super(e)}},G_=class extends Ct{constructor(e){super(e)}},Wf=[0,Ye,qe,-1,en],jd=[0,Ye,qe,Ie];G_.prototype.g=Jh([0,Ye,Hf,[0,Ye],zf,Kd,Wf,jd]);var H_=class extends Ct{constructor(e){super(e)}},ZS=Hi(456383383,H_);sn[456383383]=[0,Ye,I_];var W_=class extends Ct{constructor(e){super(e)}},KS=Hi(476348187,W_);sn[476348187]=[0,Ye,zS];var X_=class extends Ct{constructor(e){super(e)}},O0=class extends Ct{constructor(e){super(e)}},q_=[0,yn,-1],jS=Hi(458105876,class extends Ct{constructor(e){super(e)}g(){let e;var t=this.v;let n=0|t[At];return e=Yn(this,n),t=(function(i,s,r,o){var a=O0;!o&&Ro(i)&&(r=0|(s=i.v)[At]);var l=rs(s,2);if(i=!1,l==null){if(o)return _0();l=[]}else if(l.constructor===ss){if(!(2&l.J)||o)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[At])):l=[];if(o){if(!l.length)return _0();i||(i=!0,Za(l))}else i&&(i=!1,Ga(l),l=kg(l));return!i&&32&r&&Ya(l,32),r=nn(s,r,2,o=new ss(l,a,Qb,void 0)),i||pr(s,r),o})(this,t,n,e),!e&&O0&&(t.ra=!0),t}});sn[458105876]=[0,q_,bS,[!0,Bs,[0,me,-1,vn]],[0,Qa,Ie,yn]];var Xf=class extends Ct{constructor(e){super(e)}},Y_=Hi(458105758,Xf);sn[458105758]=[0,Ye,me,q_];var Od=class extends Ct{constructor(e){super(e)}},B0=[0,ES,-1,cr],JS=class extends Ct{constructor(e){super(e)}},Z_=class extends Ct{constructor(e){super(e)}},Jd=[1,2];Z_.prototype.g=Jh([0,Jd,we,B0,we,[0,ln,B0]]);var K_=class extends Ct{constructor(e){super(e)}},$S=Hi(443442058,K_);sn[443442058]=[0,Ye,me,en,qe,vn,-1,Ie,qe],sn[514774813]=Wf;var j_=class extends Ct{constructor(e){super(e)}},QS=Hi(516587230,j_);function $d(e,t){return t=t?t.clone():new kf,e.displayNamesLocale!==void 0?de(t,1,Ja(e.displayNamesLocale)):e.displayNamesLocale===void 0&&de(t,1),e.maxResults!==void 0?as(t,2,e.maxResults):"maxResults"in e&&de(t,2),e.scoreThreshold!==void 0?Dt(t,3,e.scoreThreshold):"scoreThreshold"in e&&de(t,3),e.categoryAllowlist!==void 0?Rh(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&de(t,4),e.categoryDenylist!==void 0?Rh(t,5,e.categoryDenylist):"categoryDenylist"in e&&de(t,5),t}function J_(e){let t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function qf(e,t=-1,n=""){return{categories:e.map((i=>({index:li(i,1)??0??-1,score:Ve(i,2)??0,categoryName:un(Pe(i,3))??""??"",displayName:un(Pe(i,4))??""??""}))),headIndex:t,headName:n}}function t3(e){let t={classifications:os(e,NS,1).map((n=>qf(re(n,E_,4)?.g()??[],li(n,2)??0,un(Pe(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(Hd(n)?n=Number(n):(n=Ka(64,n),n=Hd(n)?Number(n):String(n)),n):ja(n)?typeof n=="number"?ff(n):Pg(n):void 0})(Pe(e,2,void 0,void 0,Ah))!=null&&(t.timestampMs=J_(Pe(e,2,void 0,void 0,Ah)??Fg)),t}function $_(e){var t=sr(e,3,Oi,ir()),n=sr(e,2,Ao,ir()),i=sr(e,1,un,ir()),s=sr(e,9,un,ir());let r={categories:[],keypoints:[]};for(let o=0;o<t.length;o++)r.categories.push({score:t[o],index:n[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((t=re(e,Fd,4)?.l())&&(r.boundingBox={originX:li(t,1,Ds)??0,originY:li(t,2,Ds)??0,width:li(t,3,Ds)??0,height:li(t,4,Ds)??0,angle:0}),re(e,Fd,4)?.g().length)for(let o of re(e,Fd,4).g())r.keypoints.push({x:Pe(o,1,void 0,Ds,Oi)??0,y:Pe(o,2,void 0,Ds,Oi)??0,score:Pe(o,4,void 0,Ds,Oi)??0,label:un(Pe(o,3,void 0,Ds))??""});return r}function tu(e){let t=[];for(let n of os(e,C_,1))t.push({x:Ve(n,1)??0,y:Ve(n,2)??0,z:Ve(n,3)??0,visibility:Ve(n,4)??0});return t}function Va(e){let t=[];for(let n of os(e,A_,1))t.push({x:Ve(n,1)??0,y:Ve(n,2)??0,z:Ve(n,3)??0,visibility:Ve(n,4)??0});return t}function k0(e){return Array.from(e,(t=>t>127?t-256:t))}function z0(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}var xh;sn[516587230]=[0,Ye,Wf,jd,qe],sn[518928384]=jd;var e3=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Q_(e){if(e)return!0;if(xh===void 0)try{await WebAssembly.instantiate(e3),xh=!0}catch{xh=!1}return xh}async function vh(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?"_module":""}${await Q_(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var nr=class{};function t1(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function V0(e){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(t)}))}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{let n=self.import;n?await n(e.toString()):await import(e.toString())}}}function e1(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Pt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function G0(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);let[i,s]=e1(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function H0(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");let i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(let s of i)e.i._free(s);e.i._free(t)}function Ui(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function Us(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}nr.forVisionTasks=function(e,t=!1){return vh("vision",e??_h``,t)},nr.forTextTasks=function(e,t=!1){return vh("text",e??_h``,t)},nr.forGenAiTasks=function(e,t=!1){return vh("genai",e??_h``,t)},nr.forAudioTasks=function(e,t=!1){return vh("audio",e??_h``,t)},nr.isSimdSupported=function(e=!1){return Q_(e)};async function n3(e,t,n,i){return e=await(async(s,r,o,a,l)=>{if(r&&await V0(r),!self.ModuleFactory||o&&(await V0(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function Bd(e,t){let n=re(e.baseOptions,Dh,1)||new Dh;typeof t=="string"?(de(n,2,Ja(t)),de(n,1)):t instanceof Uint8Array&&(de(n,1,cf(t,!1)),de(n,2)),Nt(e.baseOptions,0,1,n)}function W0(e){try{let t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map((n=>n.message)).join(", "))}finally{e.H=[]}}function Tt(e,t){e.C=Math.max(e.C,t)}function eu(e,t){e.B=new Dn,Zn(e.B,2,"PassThroughCalculator"),Ae(e.B,"free_memory"),te(e.B,"free_memory_unused_out"),Le(t,"free_memory"),hi(t,e.B)}function yo(e,t){Ae(e.B,t),te(e.B,t+"_unused_out")}function nu(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var Qd=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){let n=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(re(this.baseOptions,Dh,1)?.g()||re(this.baseOptions,Dh,1)?.l()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){let r=re(i.baseOptions,N0,3);if(!r){var o=r=new N0,a=new R0;ka(o,4,Sh,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new CS,ka(s,2,Sh,o)):(s=r,o=new R0,ka(s,4,Sh,o))),Nt(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Bd(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)Bd(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){let s=[];for(var r=0;;){let{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(let o of s)i.set(o,r),r+=o.length;return i})(n.modelAssetBuffer).then((i=>{Bd(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca((t=>{e=RS(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,W0(this)}finishProcessing(){this.g.finishProcessing(),W0(this)}close(){this.B=void 0,this.g.closeGraph()}};function Cn(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Qd.prototype.close=Qd.prototype.close;var tf=class{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}};function X0(e,t,n){let i=e.g;if(n=Cn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function q0(e,t){let n=e.g,i=Cn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);let s=Cn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);let r=Cn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new tf(n,i,s,r)}function Yf(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function el(e,t,n,i){return Yf(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=q0(e,!0)),n=e.u):(e.A||(e.A=q0(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function ks(e,t,n){return Yf(e,t),e=Cn(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function iu(e,t,n){Yf(e,t),e.B||(e.B=Cn(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function Zf(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var Fo=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){let e=this.g;if(this.h=Cn(e.createProgram(),"Failed to create WebGL program"),this.X=X0(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=X0(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){let e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}},i3=class extends Fo{H(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}D(){let e=this.g;e.activeTexture(e.TEXTURE1),this.C=ks(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=ks(this,e,e.NEAREST)}m(){super.m();let e=this.g;this.P=Cn(e.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.U=Cn(e.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.M=Cn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.M,0),e.uniform1i(this.P,1),e.uniform1i(this.U,2)}close(){this.C&&this.g.deleteTexture(this.C),this.j&&this.g.deleteTexture(this.j),super.close()}},s3=class extends Fo{H(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}D(){let e=this.g;e.activeTexture(e.TEXTURE1),this.j=ks(this,e),e.activeTexture(e.TEXTURE2),this.C=ks(this,e)}m(){super.m();let e=this.g;this.M=Cn(e.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.P=Cn(e.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.I=Cn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let e=this.g;e.uniform1i(this.I,0),e.uniform1i(this.M,1),e.uniform1i(this.P,2)}close(){this.j&&this.g.deleteTexture(this.j),this.C&&this.g.deleteTexture(this.C),super.close()}};function is(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function ef(e){var t=is(e,1);if(!t){if(t=is(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);let i=Mo(e);var n=Kf(e);if(iu(n,i,n1(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function n1(e){let t=is(e,2);if(!t){let n=Mo(e);t=s1(e);let i=ef(e),s=i1(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),nf(e)}return t}function Mo(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Cn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function i1(e){if(e=Mo(e),!yh)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))yh=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");yh=e.R16F}return yh}function Kf(e){return e.l||(e.l=new Fo),e.l}function s1(e){let t=Mo(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=is(e,2);return n||(n=ks(Kf(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function nf(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var yh,tn=class{constructor(e,t,n,i,s,r,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--Y0===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!is(this,0)}ka(){return!!is(this,1)}R(){return!!is(this,2)}ja(){return(t=is(e=this,0))||(t=ef(e),t=new Uint8Array(t.map((n=>Math.round(255*n)))),e.g.push(t)),t;var e,t}ia(){return ef(this)}N(){return n1(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let i=Mo(this),s=Kf(this);i.activeTexture(i.TEXTURE1),n=ks(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=i1(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),iu(s,i,n),el(s,i,!1,(()=>{s1(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),nf(this)})),Zf(s),nf(this)}}e.push(n)}return new tn(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Mo(this).deleteTexture(is(this,2)),Y0=-1}};tn.prototype.close=tn.prototype.close,tn.prototype.clone=tn.prototype.clone,tn.prototype.getAsWebGLTexture=tn.prototype.N,tn.prototype.getAsFloat32Array=tn.prototype.ia,tn.prototype.getAsUint8Array=tn.prototype.ja,tn.prototype.hasWebGLTexture=tn.prototype.R,tn.prototype.hasFloat32Array=tn.prototype.ka,tn.prototype.hasUint8Array=tn.prototype.Fa;var Y0=250,r3={color:"white",lineWidth:4,radius:6};function kd(e){return{...r3,fillColor:(e=e||{}).color,...e}}function ns(e,t){return e instanceof Function?e(t):e}function Z0(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function Ua(e){if(!e.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.l}function qa(e){if(!e.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.j}function K0(e,t,n){if(t.R())n(t.N());else{let i=t.ka()?t.ia():t.ja();e.m=e.m??new Fo;let s=qa(e);n((e=new tn([i],t.m,!1,s.canvas,e.m,t.width,t.height)).N()),e.close()}}function j0(e,t,n,i){let s=(function(a){return a.g||(a.g=new i3),a.g})(e),r=qa(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;el(s,r,!0,(()=>{(function(l,c,u,d){let h=l.g;if(h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,c),h.activeTexture(h.TEXTURE1),h.bindTexture(h.TEXTURE_2D,l.C),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,u),l.I&&(function(p,_){if(p!==_)return!1;p=p.entries(),_=_.entries();for(let[M,m]of p){p=M;let f=m,b=_.next();if(b.done)return!1;let[A,y]=b.value;if(p!==A||f[0]!==y[0]||f[1]!==y[1]||f[2]!==y[2]||f[3]!==y[3])return!1}return!!_.next().done})(l.I,d))h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,l.j);else{l.I=d;let p=Array(1024).fill(0);d.forEach(((_,M)=>{if(_.length!==4)throw Error(`Color at index ${M} is not a four-channel value.`);p[4*M]=_[0],p[4*M+1]=_[1],p[4*M+2]=_[2],p[4*M+3]=_[3]})),h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,l.j),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,256,1,0,h.RGBA,h.UNSIGNED_BYTE,new Uint8Array(p))}})(s,t,o,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);let a=s.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)}))}function J0(e,t,n,i){let s=qa(e),r=(function(l){return l.h||(l.h=new s3),l.h})(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;el(r,s,!0,(()=>{var l=r.g;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,t),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.j),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.C),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.g).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)}))}var In=class{constructor(e,t){typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}ya(e,t){if(e){var n=Ua(this);t=kd(t),n.save();var i=n.canvas,s=0;for(let r of e)n.fillStyle=ns(t.fillColor,{index:s,from:r}),n.strokeStyle=ns(t.color,{index:s,from:r}),n.lineWidth=ns(t.lineWidth,{index:s,from:r}),(e=new Path2D).arc(r.x*i.width,r.y*i.height,ns(t.radius,{index:s,from:r}),0,2*Math.PI),n.fill(e),n.stroke(e),++s;n.restore()}}xa(e,t,n){if(e&&t){var i=Ua(this);n=kd(n),i.save();var s=i.canvas,r=0;for(let o of t){i.beginPath(),t=e[o.start];let a=e[o.end];t&&a&&(i.strokeStyle=ns(n.color,{index:r,from:t,to:a}),i.lineWidth=ns(n.lineWidth,{index:r,from:t,to:a}),i.moveTo(t.x*s.width,t.y*s.height),i.lineTo(a.x*s.width,a.y*s.height)),++r,i.stroke()}i.restore()}}ua(e,t){let n=Ua(this);t=kd(t),n.save(),n.beginPath(),n.lineWidth=ns(t.lineWidth,{}),n.strokeStyle=ns(t.color,{}),n.fillStyle=ns(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}va(e,t,n=[0,0,0,255]){this.l?(function(i,s,r,o){let a=qa(i);K0(i,s,(l=>{j0(i,l,r,o),(l=Ua(i)).drawImage(a.canvas,0,0,l.canvas.width,l.canvas.height)}))})(this,e,n,t):j0(this,e.N(),n,t)}wa(e,t,n){this.l?(function(i,s,r,o){let a=qa(i);K0(i,s,(l=>{J0(i,l,r,o),(l=Ua(i)).drawImage(a.canvas,0,0,l.canvas.width,l.canvas.height)}))})(this,e,t,n):J0(this,e.N(),t,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function Fi(e,t){switch(t){case 0:return e.g.find((n=>n instanceof ImageData));case 1:return e.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function r1(e){var t=Fi(e,0);if(!t){t=bo(e);let n=su(e),i=new Uint8Array(e.width*e.height*4);iu(n,t,Eh(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),Zf(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function Eh(e){let t=Fi(e,2);if(!t){let n=bo(e);t=Th(e);let i=Fi(e,1)||r1(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Oa(e)}return t}function bo(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Cn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function su(e){return e.l||(e.l=new Fo),e.l}function Th(e){let t=bo(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Fi(e,2);return n||(n=ks(su(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Oa(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function $0(e){let t=bo(e);return el(su(e),t,!0,(()=>(function(n,i){let s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();let r=s.width,o=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=o,n})(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))))}In.prototype.close=In.prototype.close,In.prototype.drawConfidenceMask=In.prototype.wa,In.prototype.drawCategoryMask=In.prototype.va,In.prototype.drawBoundingBox=In.prototype.ua,In.prototype.drawConnectors=In.prototype.xa,In.prototype.drawLandmarks=In.prototype.ya,In.lerp=function(e,t,n,i,s){return Z0(i*(1-(e-t)/(n-t))+s*(1-(n-e)/(n-t)),i,s)},In.clamp=Z0;var hn=class{constructor(e,t,n,i,s,r,o){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--Q0===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ea(){return!!Fi(this,0)}la(){return!!Fi(this,1)}R(){return!!Fi(this,2)}Ca(){return r1(this)}Ba(){var e=Fi(this,1);return e||(Eh(this),Th(this),e=$0(this),Oa(this),this.g.push(e),this.j=!0),e}N(){return Eh(this)}clone(){let e=[];for(let t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let i=bo(this),s=su(this);i.activeTexture(i.TEXTURE1),n=ks(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),iu(s,i,n),el(s,i,!1,(()=>{Th(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Oa(this)})),Zf(s),Oa(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Eh(this),Th(this),n=$0(this),Oa(this)}e.push(n)}return new hn(e,this.la(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Fi(this,1).close(),this.m&&bo(this).deleteTexture(Fi(this,2)),Q0=-1}};hn.prototype.close=hn.prototype.close,hn.prototype.clone=hn.prototype.clone,hn.prototype.getAsWebGLTexture=hn.prototype.N,hn.prototype.getAsImageBitmap=hn.prototype.Ba,hn.prototype.getAsImageData=hn.prototype.Ca,hn.prototype.hasWebGLTexture=hn.prototype.R,hn.prototype.hasImageBitmap=hn.prototype.la,hn.prototype.hasImageData=hn.prototype.Ea;var Q0=250;function bi(...e){return e.map((([t,n])=>({start:t,end:n})))}var o3=(function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}})((tg=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:t1()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){let t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){let n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Pt(this,i||"input_audio",(r=>{Pt(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){Ui(this,"__graph_config__",(t=>{e(t)})),Pt(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){let r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),Pt(this,i,(o=>{this.i._addAudioToInputStream(this.g,t,n,o,s)}))}addGpuBufferToStream(e,t,n){Pt(this,t,(i=>{let[s,r]=G0(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(e,t,n){Pt(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){Pt(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){Pt(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){Pt(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){Pt(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){Pt(this,t,(i=>{Pt(this,e,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(e,t,n){Pt(this,t,(i=>{H0(this,Object.keys(e),(s=>{H0(this,Object.values(e),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){Pt(this,n,(s=>{Pt(this,t,(r=>{let o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(e,t){Pt(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){Pt(this,t,(i=>{let s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(e,t,n){Pt(this,t,(i=>{let s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(e,t,n){Pt(this,t,(i=>{let s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(e,t,n){Pt(this,t,(i=>{let s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(e,t,n){Pt(this,t,(i=>{let s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(e,t,n){Pt(this,t,(i=>{let s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of e)Pt(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(e,t){Pt(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){Pt(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){Pt(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){Pt(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){Pt(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){Pt(this,t,(n=>{Pt(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){Pt(this,n,(i=>{Pt(this,t,(s=>{let r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){Pt(this,t,(n=>{let i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){Pt(this,t,(n=>{let i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){Pt(this,t,(n=>{let i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){Pt(this,t,(n=>{let i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){Pt(this,t,(n=>{let i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){Pt(this,t,(n=>{let i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of e)Pt(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){Ui(this,e,t),Pt(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){Us(this,e,t),Pt(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){Ui(this,e,t),Pt(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){Us(this,e,t),Pt(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){Ui(this,e,t),Pt(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){Us(this,e,t),Pt(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){Ui(this,e,t),Pt(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){Us(this,e,t),Pt(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){Ui(this,e,t),Pt(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){Us(this,e,t),Pt(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){Ui(this,e,t),Pt(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){Us(this,e,t),Pt(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){Ui(this,e,t),Pt(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){Us(this,e,t),Pt(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ui(this,e,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)})),Pt(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends tg{get ga(){return this.i}pa(e,t,n){Pt(this,t,(i=>{let[s,r]=G0(this,e,i);this.ga._addBoundTextureAsImageToStream(i,s,r,n)}))}Z(e,t){Ui(this,e,t),Pt(this,e,(n=>{this.ga._attachImageListener(n)}))}aa(e,t){Us(this,e,t),Pt(this,e,(n=>{this.ga._attachImageVectorListener(n)}))}})),tg,Si=class extends o3{};async function ne(e,t,n){return(async function(i,s,r,o){return n3(i,s,r,o)})(e,n.canvas??(t1()?void 0:document.createElement("canvas")),t,n)}function o1(e,t,n,i){if(e.U){let r=new R_;if(n?.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Dt(r,1,(s.left+s.right)/2),Dt(r,2,(s.top+s.bottom)/2),Dt(r,4,s.right-s.left),Dt(r,3,s.bottom-s.top)}else Dt(r,1,.5),Dt(r,2,.5),Dt(r,4,1),Dt(r,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Dt(r,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[o,a]=e1(t);n=Ve(r,3)*a/o,s=Ve(r,4)*o/a,Dt(r,4,n),Dt(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.pa(t,e.X,i??performance.now()),e.finishProcessing()}function Ei(e,t,n){if(e.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");o1(e,t,n,e.C+1)}function Wi(e,t,n,i){if(!e.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");o1(e,t,n,i)}function So(e,t,n,i){var s=t.data;let r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return e=new tn([s],n,!1,e.g.i.canvas,e.P,r,t),i?e.clone():e}var Kn=class extends Qd{constructor(e,t,n,i){super(e),this.g=e,this.X=t,this.U=n,this.oa=i,this.P=new Fo}l(e,t=!0){if("runningMode"in e&&de(this.baseOptions,2,Wa(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Kn.prototype.close=Kn.prototype.close;var ri=class extends Kn{constructor(e,t){super(new Si(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Nt(e=this.h=new Qh,0,1,t=new Ne),Dt(this.h,2,.5),Dt(this.h,3,.3)}get baseOptions(){return re(this.h,Ne,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&Dt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Dt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},Ei(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Wi(this,e,n,t),this.j}m(){var e=new Jn;Le(e,"image_in"),Le(e,"norm_rect_in"),oe(e,"detections");let t=new jn;Gi(t,VS,this.h);let n=new Dn;Zn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ae(n,"IMAGE:image_in"),Ae(n,"NORM_RECT:norm_rect_in"),te(n,"DETECTIONS:detections"),n.o(t),hi(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=w_(r),this.j.detections.push($_(i));Tt(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{Tt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ri.prototype.detectForVideo=ri.prototype.G,ri.prototype.detect=ri.prototype.F,ri.prototype.setOptions=ri.prototype.o,ri.createFromModelPath=async function(e,t){return ne(ri,e,{baseOptions:{modelAssetPath:t}})},ri.createFromModelBuffer=function(e,t){return ne(ri,e,{baseOptions:{modelAssetBuffer:t}})},ri.createFromOptions=function(e,t){return ne(ri,e,t)};var jf=bi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Jf=bi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),$f=bi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),a1=bi([474,475],[475,476],[476,477],[477,474]),Qf=bi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),tp=bi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),l1=bi([469,470],[470,471],[471,472],[472,469]),ep=bi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),c1=[...jf,...Jf,...$f,...Qf,...tp,...ep],h1=bi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function eg(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ue=class extends Kn{constructor(e,t){super(new Si(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Nt(e=this.h=new U_,0,1,t=new Ne),this.A=new D_,Nt(this.h,0,3,this.A),this.u=new Qh,Nt(this.h,0,2,this.u),as(this.u,4,1),Dt(this.u,2,.5),Dt(this.A,2,.5),Dt(this.h,4,.5)}get baseOptions(){return re(this.h,Ne,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return"numFaces"in e&&as(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Dt(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Dt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Dt(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return eg(this),Ei(this,e,t),this.j}G(e,t,n){return eg(this),Wi(this,e,n,t),this.j}m(){var e=new Jn;Le(e,"image_in"),Le(e,"norm_rect"),oe(e,"face_landmarks");let t=new jn;Gi(t,HS,this.h);let n=new Dn;Zn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ae(n,"IMAGE:image_in"),Ae(n,"NORM_RECT:norm_rect"),te(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),hi(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(let r of i)i=tl(r),this.j.faceLandmarks.push(tu(i));Tt(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{Tt(this,i)})),this.outputFaceBlendshapes&&(oe(e,"blendshapes"),te(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=$h(r),this.j.faceBlendshapes.push(qf(i.g()??[]));Tt(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{Tt(this,i)}))),this.outputFacialTransformationMatrixes&&(oe(e,"face_geometry"),te(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=re(i=GS(r),DS,2))&&this.j.facialTransformationMatrixes.push({rows:li(i,1)??0??0,columns:li(i,2)??0??0,data:sr(i,3,Oi,ir()).slice()??[]});Tt(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{Tt(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ue.prototype.detectForVideo=Ue.prototype.G,Ue.prototype.detect=Ue.prototype.F,Ue.prototype.setOptions=Ue.prototype.o,Ue.createFromModelPath=function(e,t){return ne(Ue,e,{baseOptions:{modelAssetPath:t}})},Ue.createFromModelBuffer=function(e,t){return ne(Ue,e,{baseOptions:{modelAssetBuffer:t}})},Ue.createFromOptions=function(e,t){return ne(Ue,e,t)},Ue.FACE_LANDMARKS_LIPS=jf,Ue.FACE_LANDMARKS_LEFT_EYE=Jf,Ue.FACE_LANDMARKS_LEFT_EYEBROW=$f,Ue.FACE_LANDMARKS_LEFT_IRIS=a1,Ue.FACE_LANDMARKS_RIGHT_EYE=Qf,Ue.FACE_LANDMARKS_RIGHT_EYEBROW=tp,Ue.FACE_LANDMARKS_RIGHT_IRIS=l1,Ue.FACE_LANDMARKS_FACE_OVAL=ep,Ue.FACE_LANDMARKS_CONTOURS=c1,Ue.FACE_LANDMARKS_TESSELATION=h1;var np=bi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function ng(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function ig(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function sg(e,t=!0){let n=[];for(let s of e){var i=$h(s);e=[];for(let r of i.g())i=t&&li(r,1)!=null?li(r,1)??0:-1,e.push({score:Ve(r,2)??0,index:i,categoryName:un(Pe(r,3))??""??"",displayName:un(Pe(r,4))??""??""});n.push(e)}return n}var Gn=class extends Kn{constructor(e,t){super(new Si(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Nt(e=this.j=new O_,0,1,t=new Ne),this.u=new Gf,Nt(this.j,0,2,this.u),this.D=new Vf,Nt(this.u,0,3,this.D),this.A=new F_,Nt(this.u,0,2,this.A),this.h=new WS,Nt(this.j,0,3,this.h),Dt(this.A,2,.5),Dt(this.u,4,.5),Dt(this.D,2,.5)}get baseOptions(){return re(this.j,Ne,1)}set baseOptions(e){Nt(this.j,0,1,e)}o(e){if(as(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&Dt(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Dt(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Dt(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new ao,n=t,i=$d(e.cannedGesturesClassifierOptions,re(this.h,ao,3)?.l());Nt(n,0,2,i),Nt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&re(this.h,ao,3)?.g();return e.customGesturesClassifierOptions?(Nt(n=t=new ao,0,2,i=$d(e.customGesturesClassifierOptions,re(this.h,ao,4)?.l())),Nt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&re(this.h,ao,4)?.g(),this.l(e)}Ha(e,t){return ng(this),Ei(this,e,t),ig(this)}Ia(e,t,n){return ng(this),Wi(this,e,n,t),ig(this)}m(){var e=new Jn;Le(e,"image_in"),Le(e,"norm_rect"),oe(e,"hand_gestures"),oe(e,"hand_landmarks"),oe(e,"world_hand_landmarks"),oe(e,"handedness");let t=new jn;Gi(t,XS,this.j);let n=new Dn;Zn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ae(n,"IMAGE:image_in"),Ae(n,"NORM_RECT:norm_rect"),te(n,"HAND_GESTURES:hand_gestures"),te(n,"LANDMARKS:hand_landmarks"),te(n,"WORLD_LANDMARKS:world_hand_landmarks"),te(n,"HANDEDNESS:handedness"),n.o(t),hi(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i){i=tl(r);let o=[];for(let a of os(i,C_,1))o.push({x:Ve(a,1)??0,y:Ve(a,2)??0,z:Ve(a,3)??0,visibility:Ve(a,4)??0});this.landmarks.push(o)}Tt(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Tt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i){i=ho(r);let o=[];for(let a of os(i,A_,1))o.push({x:Ve(a,1)??0,y:Ve(a,2)??0,z:Ve(a,3)??0,visibility:Ve(a,4)??0});this.worldLandmarks.push(o)}Tt(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Tt(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...sg(i,!1)),Tt(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{Tt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...sg(i)),Tt(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{Tt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function rg(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}Gn.prototype.recognizeForVideo=Gn.prototype.Ia,Gn.prototype.recognize=Gn.prototype.Ha,Gn.prototype.setOptions=Gn.prototype.o,Gn.createFromModelPath=function(e,t){return ne(Gn,e,{baseOptions:{modelAssetPath:t}})},Gn.createFromModelBuffer=function(e,t){return ne(Gn,e,{baseOptions:{modelAssetBuffer:t}})},Gn.createFromOptions=function(e,t){return ne(Gn,e,t)},Gn.HAND_CONNECTIONS=np;var xn=class extends Kn{constructor(e,t){super(new Si(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Nt(e=this.h=new Gf,0,1,t=new Ne),this.u=new Vf,Nt(this.h,0,3,this.u),this.j=new F_,Nt(this.h,0,2,this.j),as(this.j,3,1),Dt(this.j,2,.5),Dt(this.u,2,.5),Dt(this.h,4,.5)}get baseOptions(){return re(this.h,Ne,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return"numHands"in e&&as(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&Dt(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Dt(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Dt(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ei(this,e,t),rg(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Wi(this,e,n,t),rg(this)}m(){var e=new Jn;Le(e,"image_in"),Le(e,"norm_rect"),oe(e,"hand_landmarks"),oe(e,"world_hand_landmarks"),oe(e,"handedness");let t=new jn;Gi(t,qS,this.h);let n=new Dn;Zn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ae(n,"IMAGE:image_in"),Ae(n,"NORM_RECT:norm_rect"),te(n,"LANDMARKS:hand_landmarks"),te(n,"WORLD_LANDMARKS:world_hand_landmarks"),te(n,"HANDEDNESS:handedness"),n.o(t),hi(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i)i=tl(r),this.landmarks.push(tu(i));Tt(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Tt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i)i=ho(r),this.worldLandmarks.push(Va(i));Tt(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Tt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,o=r.push;let a=[];for(let l of i){i=$h(l);let c=[];for(let u of i.g())c.push({score:Ve(u,2)??0,index:li(u,1)??0??-1,categoryName:un(Pe(u,3))??""??"",displayName:un(Pe(u,4))??""??""});a.push(c)}o.call(r,...a),Tt(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{Tt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};xn.prototype.detectForVideo=xn.prototype.G,xn.prototype.detect=xn.prototype.F,xn.prototype.setOptions=xn.prototype.o,xn.createFromModelPath=function(e,t){return ne(xn,e,{baseOptions:{modelAssetPath:t}})},xn.createFromModelBuffer=function(e,t){return ne(xn,e,{baseOptions:{modelAssetBuffer:t}})},xn.createFromOptions=function(e,t){return ne(xn,e,t)},xn.HAND_CONNECTIONS=np;var u1=bi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function og(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function ag(e){try{if(!e.D)return e.h;e.D(e.h)}finally{nu(e)}}function Mh(e,t){e=tl(e),t.push(tu(e))}var Te=class extends Kn{constructor(e,t){super(new Si(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Nt(e=this.j=new G_,0,1,t=new Ne),this.I=new Vf,Nt(this.j,0,2,this.I),this.W=new YS,Nt(this.j,0,3,this.W),this.u=new Qh,Nt(this.j,0,4,this.u),this.O=new D_,Nt(this.j,0,5,this.O),this.A=new z_,Nt(this.j,0,6,this.A),this.M=new V_,Nt(this.j,0,7,this.M),Dt(this.u,2,.5),Dt(this.u,3,.3),Dt(this.O,2,.5),Dt(this.A,2,.5),Dt(this.A,3,.3),Dt(this.M,2,.5),Dt(this.I,2,.5)}get baseOptions(){return re(this.j,Ne,1)}set baseOptions(e){Nt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&Dt(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Dt(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Dt(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Dt(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Dt(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Dt(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Dt(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){let i=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:n,og(this),Ei(this,e,i),ag(this)}G(e,t,n,i){let s=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,og(this),Wi(this,e,s,t),ag(this)}m(){var e=new Jn;Le(e,"input_frames_image"),oe(e,"pose_landmarks"),oe(e,"pose_world_landmarks"),oe(e,"face_landmarks"),oe(e,"left_hand_landmarks"),oe(e,"left_hand_world_landmarks"),oe(e,"right_hand_landmarks"),oe(e,"right_hand_world_landmarks");let t=new jn,n=new T0;Zn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))de(s,2,zh(r,0,Xa));else{if(!(typeof r=="string"||r instanceof Bi||af(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Ns(s,2,cf(r,!1),hr())}})(n,this.j.g());let i=new Dn;Zn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Sf(i,8,T0,n),Ae(i,"IMAGE:input_frames_image"),te(i,"POSE_LANDMARKS:pose_landmarks"),te(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),te(i,"FACE_LANDMARKS:face_landmarks"),te(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),te(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),te(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),te(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),hi(e,i),eu(this,e),this.g.attachProtoListener("pose_landmarks",((s,r)=>{Mh(s,this.h.poseLandmarks),Tt(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{Tt(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=ho(s),o.push(Va(s)),Tt(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{Tt(this,s)})),this.outputPoseSegmentationMasks&&(te(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),yo(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[So(this,s,!0,!this.D)],Tt(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],Tt(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{Mh(s,this.h.faceLandmarks),Tt(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{Tt(this,s)})),this.outputFaceBlendshapes&&(oe(e,"extra_blendshapes"),te(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=$h(s),o.push(qf(s.g()??[]))),Tt(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{Tt(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{Mh(s,this.h.leftHandLandmarks),Tt(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{Tt(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=ho(s),o.push(Va(s)),Tt(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{Tt(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{Mh(s,this.h.rightHandLandmarks),Tt(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{Tt(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=ho(s),o.push(Va(s)),Tt(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{Tt(this,s)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Te.prototype.detectForVideo=Te.prototype.G,Te.prototype.detect=Te.prototype.F,Te.prototype.setOptions=Te.prototype.o,Te.createFromModelPath=function(e,t){return ne(Te,e,{baseOptions:{modelAssetPath:t}})},Te.createFromModelBuffer=function(e,t){return ne(Te,e,{baseOptions:{modelAssetBuffer:t}})},Te.createFromOptions=function(e,t){return ne(Te,e,t)},Te.HAND_CONNECTIONS=np,Te.POSE_CONNECTIONS=u1,Te.FACE_LANDMARKS_LIPS=jf,Te.FACE_LANDMARKS_LEFT_EYE=Jf,Te.FACE_LANDMARKS_LEFT_EYEBROW=$f,Te.FACE_LANDMARKS_LEFT_IRIS=a1,Te.FACE_LANDMARKS_RIGHT_EYE=Qf,Te.FACE_LANDMARKS_RIGHT_EYEBROW=tp,Te.FACE_LANDMARKS_RIGHT_IRIS=l1,Te.FACE_LANDMARKS_FACE_OVAL=ep,Te.FACE_LANDMARKS_CONTOURS=c1,Te.FACE_LANDMARKS_TESSELATION=h1;var oi=class extends Kn{constructor(e,t){super(new Si(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Nt(e=this.h=new H_,0,1,t=new Ne)}get baseOptions(){return re(this.h,Ne,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return Nt(this.h,0,2,$d(e,re(this.h,kf,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},Ei(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},Wi(this,e,n,t),this.j}m(){var e=new Jn;Le(e,"input_image"),Le(e,"norm_rect"),oe(e,"classifications");let t=new jn;Gi(t,ZS,this.h);let n=new Dn;Zn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ae(n,"IMAGE:input_image"),Ae(n,"NORM_RECT:norm_rect"),te(n,"CLASSIFICATIONS:classifications"),n.o(t),hi(e,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=t3(FS(i)),Tt(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{Tt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};oi.prototype.classifyForVideo=oi.prototype.ta,oi.prototype.classify=oi.prototype.sa,oi.prototype.setOptions=oi.prototype.o,oi.createFromModelPath=function(e,t){return ne(oi,e,{baseOptions:{modelAssetPath:t}})},oi.createFromModelBuffer=function(e,t){return ne(oi,e,{baseOptions:{modelAssetBuffer:t}})},oi.createFromOptions=function(e,t){return ne(oi,e,t)};var Hn=class extends Kn{constructor(e,t){super(new Si(e,t),"image_in","norm_rect",!0),this.h=new W_,this.embeddings={embeddings:[]},Nt(e=this.h,0,1,t=new Ne)}get baseOptions(){return re(this.h,Ne,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){var t=this.h,n=re(this.h,U0,2);return n=n?n.clone():new U0,e.l2Normalize!==void 0?de(n,1,Wa(e.l2Normalize)):"l2Normalize"in e&&de(n,1),e.quantize!==void 0?de(n,2,Wa(e.quantize)):"quantize"in e&&de(n,2),Nt(t,0,2,n),this.l(e)}za(e,t){return Ei(this,e,t),this.embeddings}Aa(e,t,n){return Wi(this,e,n,t),this.embeddings}m(){var e=new Jn;Le(e,"image_in"),Le(e,"norm_rect"),oe(e,"embeddings_out");let t=new jn;Gi(t,KS,this.h);let n=new Dn;Zn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ae(n,"IMAGE:image_in"),Ae(n,"NORM_RECT:norm_rect"),te(n,"EMBEDDINGS:embeddings_out"),n.o(t),hi(e,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=kS(i),this.embeddings=(function(r){return{embeddings:os(r,BS,1).map((o=>{let a={headIndex:li(o,3)??0??-1,headName:un(Pe(o,4))??""??""};var l=o.v;return Vg(l,0|l[At],D0,Dd(o,1))!==void 0?(o=sr(o=re(o,D0,Dd(o,1),void 0),1,Oi,ir()),a.floatEmbedding=o.slice()):(l=new Uint8Array(0),a.quantizedEmbedding=re(o,OS,Dd(o,2),void 0)?.na()?.h()??l),a})),timestampMs:J_(Pe(r,2,void 0,void 0,Ah)??Fg)}})(i),Tt(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Tt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Hn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=z0(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=z0(k0(e.quantizedEmbedding),k0(t.quantizedEmbedding))}return e},Hn.prototype.embedForVideo=Hn.prototype.Aa,Hn.prototype.embed=Hn.prototype.za,Hn.prototype.setOptions=Hn.prototype.o,Hn.createFromModelPath=function(e,t){return ne(Hn,e,{baseOptions:{modelAssetPath:t}})},Hn.createFromModelBuffer=function(e,t){return ne(Hn,e,{baseOptions:{modelAssetBuffer:t}})},Hn.createFromOptions=function(e,t){return ne(Hn,e,t)};var sf=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};function a3(e){let t=(function(n){return os(n,Dn,1)})(e.ca()).filter((n=>(un(Pe(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(re(t[0],jn,7)?.j()?.g()??new Map).forEach(((n,i)=>{e.u[Number(i)]=un(Pe(n,1))??""}))}function lg(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function cg(e){try{let t=new sf(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{nu(e)}}sf.prototype.close=sf.prototype.close;var Ln=class extends Kn{constructor(e,t){super(new Si(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Xf,this.A=new X_,Nt(this.h,0,3,this.A),Nt(e=this.h,0,1,t=new Ne)}get baseOptions(){return re(this.h,Ne,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?de(this.h,2,Ja(e.displayNamesLocale)):"displayNamesLocale"in e&&de(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){a3(this)}segment(e,t,n){let i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,lg(this),Ei(this,e,i),cg(this)}La(e,t,n,i){let s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,lg(this),Wi(this,e,s,t),cg(this)}Da(){return this.u}m(){var e=new Jn;Le(e,"image_in"),Le(e,"norm_rect");let t=new jn;Gi(t,Y_,this.h);let n=new Dn;Zn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ae(n,"IMAGE:image_in"),Ae(n,"NORM_RECT:norm_rect"),n.o(t),hi(e,n),eu(this,e),this.outputConfidenceMasks&&(oe(e,"confidence_masks"),te(n,"CONFIDENCE_MASKS:confidence_masks"),yo(this,"confidence_masks"),this.g.aa("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>So(this,r,!0,!this.j))),Tt(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Tt(this,i)}))),this.outputCategoryMask&&(oe(e,"category_mask"),te(n,"CATEGORY_MASK:category_mask"),yo(this,"category_mask"),this.g.Z("category_mask",((i,s)=>{this.categoryMask=So(this,i,!1,!this.j),Tt(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Tt(this,i)}))),oe(e,"quality_scores"),te(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,Tt(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Tt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ln.prototype.getLabels=Ln.prototype.Da,Ln.prototype.segmentForVideo=Ln.prototype.La,Ln.prototype.segment=Ln.prototype.segment,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=function(e,t){return ne(Ln,e,{baseOptions:{modelAssetPath:t}})},Ln.createFromModelBuffer=function(e,t){return ne(Ln,e,{baseOptions:{modelAssetBuffer:t}})},Ln.createFromOptions=function(e,t){return ne(Ln,e,t)};var rf=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};rf.prototype.close=rf.prototype.close;var Ni=class extends Kn{constructor(e,t){super(new Si(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Xf,this.u=new X_,Nt(this.h,0,3,this.u),Nt(e=this.h,0,1,t=new Ne)}get baseOptions(){return re(this.h,Ne,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){let s=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new Z_,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new Od;Ns(r,3,Wa(!0),!1),Ns(r,1,Fa(t.keypoint.x),0),Ns(r,2,Fa(t.keypoint.y),0),ka(i,1,Jd,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{let a=new JS;for(r of t.scribble)Ns(t=new Od,3,Wa(!0),!1),Ns(t,1,Fa(r.x),0),Ns(t,2,Fa(r.y),0),Sf(a,1,Od,t);ka(i,2,Jd,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Ei(this,e,s);t:{try{let a=new rf(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break t}this.j(a)}finally{nu(this)}o=void 0}return o}m(){var e=new Jn;Le(e,"image_in"),Le(e,"roi_in"),Le(e,"norm_rect_in");let t=new jn;Gi(t,Y_,this.h);let n=new Dn;Zn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Ae(n,"IMAGE:image_in"),Ae(n,"ROI:roi_in"),Ae(n,"NORM_RECT:norm_rect_in"),n.o(t),hi(e,n),eu(this,e),this.outputConfidenceMasks&&(oe(e,"confidence_masks"),te(n,"CONFIDENCE_MASKS:confidence_masks"),yo(this,"confidence_masks"),this.g.aa("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>So(this,r,!0,!this.j))),Tt(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Tt(this,i)}))),this.outputCategoryMask&&(oe(e,"category_mask"),te(n,"CATEGORY_MASK:category_mask"),yo(this,"category_mask"),this.g.Z("category_mask",((i,s)=>{this.categoryMask=So(this,i,!1,!this.j),Tt(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Tt(this,i)}))),oe(e,"quality_scores"),te(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,Tt(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Tt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ni.prototype.segment=Ni.prototype.segment,Ni.prototype.setOptions=Ni.prototype.o,Ni.createFromModelPath=function(e,t){return ne(Ni,e,{baseOptions:{modelAssetPath:t}})},Ni.createFromModelBuffer=function(e,t){return ne(Ni,e,{baseOptions:{modelAssetBuffer:t}})},Ni.createFromOptions=function(e,t){return ne(Ni,e,t)};var ai=class extends Kn{constructor(e,t){super(new Si(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Nt(e=this.h=new K_,0,1,t=new Ne)}get baseOptions(){return re(this.h,Ne,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?de(this.h,2,Ja(e.displayNamesLocale)):"displayNamesLocale"in e&&de(this.h,2),e.maxResults!==void 0?as(this.h,3,e.maxResults):"maxResults"in e&&de(this.h,3),e.scoreThreshold!==void 0?Dt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&de(this.h,4),e.categoryAllowlist!==void 0?Rh(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&de(this.h,5),e.categoryDenylist!==void 0?Rh(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&de(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},Ei(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Wi(this,e,n,t),this.j}m(){var e=new Jn;Le(e,"input_frame_gpu"),Le(e,"norm_rect"),oe(e,"detections");let t=new jn;Gi(t,$S,this.h);let n=new Dn;Zn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ae(n,"IMAGE:input_frame_gpu"),Ae(n,"NORM_RECT:norm_rect"),te(n,"DETECTIONS:detections"),n.o(t),hi(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=w_(r),this.j.detections.push($_(i));Tt(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{Tt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ai.prototype.detectForVideo=ai.prototype.G,ai.prototype.detect=ai.prototype.F,ai.prototype.setOptions=ai.prototype.o,ai.createFromModelPath=async function(e,t){return ne(ai,e,{baseOptions:{modelAssetPath:t}})},ai.createFromModelBuffer=function(e,t){return ne(ai,e,{baseOptions:{modelAssetBuffer:t}})},ai.createFromOptions=function(e,t){return ne(ai,e,t)};var of=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((e=>{e.close()}))}};function hg(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function ug(e){try{let t=new of(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{nu(e)}}of.prototype.close=of.prototype.close;var Wn=class extends Kn{constructor(e,t){super(new Si(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Nt(e=this.h=new j_,0,1,t=new Ne),this.A=new V_,Nt(this.h,0,3,this.A),this.j=new z_,Nt(this.h,0,2,this.j),as(this.j,4,1),Dt(this.j,2,.5),Dt(this.A,2,.5),Dt(this.h,4,.5)}get baseOptions(){return re(this.h,Ne,1)}set baseOptions(e){Nt(this.h,0,1,e)}o(e){return"numPoses"in e&&as(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Dt(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Dt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Dt(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){let i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,hg(this),Ei(this,e,i),ug(this)}G(e,t,n,i){let s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,hg(this),Wi(this,e,s,t),ug(this)}m(){var e=new Jn;Le(e,"image_in"),Le(e,"norm_rect"),oe(e,"normalized_landmarks"),oe(e,"world_landmarks"),oe(e,"segmentation_masks");let t=new jn;Gi(t,QS,this.h);let n=new Dn;Zn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ae(n,"IMAGE:image_in"),Ae(n,"NORM_RECT:norm_rect"),te(n,"NORM_LANDMARKS:normalized_landmarks"),te(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),hi(e,n),eu(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(let r of i)i=tl(r),this.landmarks.push(tu(i));Tt(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Tt(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(let r of i)i=ho(r),this.worldLandmarks.push(Va(i));Tt(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Tt(this,i)})),this.outputSegmentationMasks&&(te(n,"SEGMENTATION_MASK:segmentation_masks"),yo(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>So(this,r,!0,!this.u))),Tt(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Tt(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Wn.prototype.detectForVideo=Wn.prototype.G,Wn.prototype.detect=Wn.prototype.F,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=function(e,t){return ne(Wn,e,{baseOptions:{modelAssetPath:t}})},Wn.createFromModelBuffer=function(e,t){return ne(Wn,e,{baseOptions:{modelAssetBuffer:t}})},Wn.createFromOptions=function(e,t){return ne(Wn,e,t)},Wn.POSE_CONNECTIONS=u1;var l3="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm",c3="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",d1=0,ru=4,ou=8,f1=9,p1=.32,h3=.45,m1=5,g1=.4,ip=class{video;overlay;callbacks;landmarker=null;stream=null;rafId=0;running=!1;lastVideoTime=-1;handStates=new Map;prevMode="idle";prevSpinGrab=null;prevZoomDist=null;lastStatus={hands:0,mode:"idle"};constructor(t,n,i){this.video=t,this.overlay=n,this.callbacks=i}async start(){this.stream=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1}),this.video.srcObject=this.stream,await this.video.play();let t=await nr.forVisionTasks(l3),n={baseOptions:{modelAssetPath:c3,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.6,minHandPresenceConfidence:.6,minTrackingConfidence:.6};try{this.landmarker=await xn.createFromOptions(t,n)}catch{this.landmarker=await xn.createFromOptions(t,{...n,baseOptions:{...n.baseOptions,delegate:"CPU"}})}this.running=!0,this.loop()}stop(){this.running=!1,cancelAnimationFrame(this.rafId),this.landmarker?.close(),this.landmarker=null,this.stream?.getTracks().forEach(n=>n.stop()),this.stream=null,this.video.srcObject=null,this.handStates.clear(),this.prevMode="idle",this.prevSpinGrab=null,this.prevZoomDist=null,this.overlay.getContext("2d")?.clearRect(0,0,this.overlay.width,this.overlay.height),this.emitStatus({hands:0,mode:"idle"})}loop=()=>{if(!this.running||(this.rafId=requestAnimationFrame(this.loop),!this.landmarker||this.video.readyState<2)||this.video.currentTime===this.lastVideoTime)return;this.lastVideoTime=this.video.currentTime;let t=this.landmarker.detectForVideo(this.video,performance.now());this.processHands(t.landmarks,t.handedness.map(n=>n[0]?.categoryName??"?")),this.drawOverlay(t.landmarks)};processHands(t,n){let i=[],s=new Set;t.forEach((o,a)=>{let l=n[a];s.add(l);let c=au(o[d1],o[f1]);if(c<1e-6)return;let u=au(o[ru],o[ou])/c,d={x:1-(o[ru].x+o[ou].x)/2,y:(o[ru].y+o[ou].y)/2},h=this.handStates.get(l);h||(h={pinching:!1,grab:d},this.handStates.set(l,h)),h.pinching&&u>h3?h.pinching=!1:!h.pinching&&u<p1&&(h.pinching=!0),h.grab={x:h.grab.x+(d.x-h.grab.x)*g1,y:h.grab.y+(d.y-h.grab.y)*g1},h.pinching&&i.push(h.grab)});for(let o of this.handStates.keys())s.has(o)||this.handStates.delete(o);let r=i.length>=2?"zoom":i.length===1?"spin":"idle";if(r!==this.prevMode&&(this.prevSpinGrab=null,this.prevZoomDist=null,this.prevMode=r),r==="spin"){let o=i[0];if(this.prevSpinGrab){let a=o.x-this.prevSpinGrab.x,l=o.y-this.prevSpinGrab.y;(Math.abs(a)>1e-4||Math.abs(l)>1e-4)&&this.callbacks.onRotate(a*m1,l*m1)}this.prevSpinGrab=o}else if(r==="zoom"){let o=Math.hypot(i[0].x-i[1].x,i[0].y-i[1].y);if(this.prevZoomDist&&o>1e-4){let a=Math.min(1.18,Math.max(.85,this.prevZoomDist/o));this.callbacks.onZoom(a)}this.prevZoomDist=o}this.emitStatus({hands:t.length,mode:r})}emitStatus(t){(t.hands!==this.lastStatus.hands||t.mode!==this.lastStatus.mode)&&(this.lastStatus=t,this.callbacks.onStatus(t))}drawOverlay(t){let n=this.overlay.getContext("2d");if(!n)return;let{width:i,height:s}=this.overlay;n.clearRect(0,0,i,s);for(let r of t){let o=r[ru],a=r[ou],l=(1-o.x)*i,c=o.y*s,u=(1-a.x)*i,d=a.y*s,h=au(r[d1],r[f1]),p=h>1e-6&&au(o,a)/h<p1;n.strokeStyle=p?"#ffcc66":"rgba(255,170,48,0.5)",n.lineWidth=p?2:1,n.beginPath(),n.moveTo(l,c),n.lineTo(u,d),n.stroke(),n.fillStyle=p?"#ffcc66":"rgba(255,170,48,0.7)";for(let[_,M]of[[l,c],[u,d]])n.beginPath(),n.arc(_,M,p?5:3,0,Math.PI*2),n.fill()}}};function au(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}var _1=new P(0,.5,5.5),x1=.6,v1=40;function jC(e){let t=e.clientWidth,n=e.clientHeight,i=new ta,s=new mn(55,t/n,.1,500);s.position.copy(_1);let r=new lh({antialias:!0});r.setSize(t,n),r.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),r.toneMapping=ya,r.toneMappingExposure=.5,e.appendChild(r.domElement);let o=new ph(r);o.addPass(new mh(i,s));let a=new ro(new Mt(t,n),1.8,.4,.2);o.addPass(a);let l={uniforms:{tDiffuse:{value:null},uTime:{value:0},uIntensity:{value:.003}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uTime;
      uniform float uIntensity;
      varying vec2 vUv;
      void main() {
        vec2 dir = vUv - vec2(0.5);
        float d = length(dir);
        float offset = uIntensity * d;
        // Slight flicker
        float flicker = 1.0 + 0.02 * sin(uTime * 30.0) * sin(uTime * 7.3);
        vec4 cr = texture2D(tDiffuse, vUv + dir * offset);
        vec4 cg = texture2D(tDiffuse, vUv);
        vec4 cb = texture2D(tDiffuse, vUv - dir * offset * 0.5);
        gl_FragColor = vec4(cr.r, cg.g * 1.05, cb.b * 0.6, 1.0) * flicker;
        // Push towards amber/orange tone
        gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(0.95, 0.85, 1.1), 0.3);
      }
    `},c=new so(l);o.addPass(c);let u=new dh(s,r.domElement);u.enableDamping=!0,u.dampingFactor=.04,u.minDistance=x1,u.maxDistance=v1,u.zoomSpeed=1.4,u.enablePan=!1;let d=11574005,h=9003205,p=5715061,_=3153977,M=14206463,m=new En;i.add(m);function f(z,G=1){return new Vr({color:z,transparent:!0,opacity:G,blending:zn,depthWrite:!1})}function b(z,G,Z=120){let et=z*Math.cos(G),rt=z*Math.sin(G),ct=[];for(let R=0;R<=Z;R++){let it=R/Z*Math.PI*2;ct.push(new P(et*Math.cos(it),rt,et*Math.sin(it)))}return new le().setFromPoints(ct)}function A(z,G,Z=120){let et=[];for(let rt=0;rt<=Z;rt++){let ct=rt/Z*Math.PI-Math.PI/2;et.push(new P(z*Math.cos(ct)*Math.cos(G),z*Math.sin(ct),z*Math.cos(ct)*Math.sin(G)))}return new le().setFromPoints(et)}let y=new En,w=2;for(let z=-15;z<=15;z++){let G=z/15*(Math.PI/2)*.95,Z=z%3===0?.5:.12,et=z%3===0?h:_;y.add(new cn(b(w,G),f(et,Z)))}for(let z=0;z<24;z++){let G=z/24*Math.PI*2,Z=z%6===0;y.add(new cn(A(w,G),f(Z?h:_,Z?.6:.1)))}let S=18,C=.25;for(let z=0;z<4;z++){let G=z/4*Math.PI*2;for(let Z=0;Z<S;Z++){let et=Z/(S-1)*2-1,rt=et*C/2,R=.85*(1-Math.abs(et)*.7),it=Math.abs(et)<.3?d:h;y.add(new cn(A(w,G+rt,200),f(it,R)))}}let x=20,E=.35;for(let z=0;z<x;z++){let G=z/(x-1)*2-1,Z=G*E/2,rt=.8*(1-Math.abs(G)*.65),ct=Math.abs(G)<.3?d:h;y.add(new cn(b(w,Z,200),f(ct,rt)))}m.add(y);let I=new En;function L(z,G,Z,et,rt,ct=4){let R=new En,it=f(p,.25);for(let W=0;W<=ct;W++){let st=z-Z/2+W/ct*Z,ht=[];for(let $=0;$<=ct*4;$++){let xt=G-et/2+$/(ct*4)*et;ht.push(new P(rt*Math.cos(st)*Math.cos(xt),rt*Math.sin(st),rt*Math.cos(st)*Math.sin(xt)))}R.add(new cn(new le().setFromPoints(ht),it))}for(let W=0;W<=ct;W++){let st=G-et/2+W/ct*et,ht=[];for(let $=0;$<=ct*4;$++){let xt=z-Z/2+$/(ct*4)*Z;ht.push(new P(rt*Math.cos(xt)*Math.cos(st),rt*Math.sin(xt),rt*Math.cos(xt)*Math.sin(st)))}R.add(new cn(new le().setFromPoints(ht),it))}return R}for(let z=0;z<30;z++){let G=(Math.random()-.5)*Math.PI*.8,Z=Math.random()*Math.PI*2,et=.15+Math.random()*.25,rt=L(G,Z,et,et,w+.01,3+Math.floor(Math.random()*3));I.add(rt)}m.add(I);let F=new En,j=2.12;for(let z=0;z<16;z++){let G=(Math.random()-.5)*Math.PI*.85,Z=Math.random()*Math.PI*2,et=.3+Math.random()*1.2,rt=[],ct=60,R=j*Math.cos(G),it=j*Math.sin(G);for(let W=0;W<=ct;W++){let st=Z+W/ct*et;rt.push(new P(R*Math.cos(st),it,R*Math.sin(st)))}F.add(new cn(new le().setFromPoints(rt),f(h,.2+Math.random()*.3)))}for(let z=0;z<12;z++){let G=Math.random()*Math.PI*2,Z=(Math.random()-.5)*Math.PI*.8,et=.3+Math.random()*.8,rt=[],ct=40;for(let R=0;R<=ct;R++){let it=Z+R/ct*et;rt.push(new P(j*Math.cos(it)*Math.cos(G),j*Math.sin(it),j*Math.cos(it)*Math.sin(G)))}F.add(new cn(new le().setFromPoints(rt),f(p,.15+Math.random()*.2)))}m.add(F);let J=new En,O=.9;for(let z=0;z<8;z++){let G=[],Z=3+Math.random()*2,et=300,rt=z/8*Math.PI*2;for(let ct=0;ct<=et;ct++){let R=ct/et,it=R*Math.PI-Math.PI/2,W=R*Z*Math.PI*2+rt;G.push(new P(O*Math.cos(it)*Math.cos(W),O*Math.sin(it),O*Math.cos(it)*Math.sin(W)))}J.add(new cn(new le().setFromPoints(G),f(d,.3+Math.random()*.2)))}for(let z=-6;z<=6;z++){let G=z/6*(Math.PI/2)*.9;J.add(new cn(b(O,G,80),f(p,.2)))}for(let z=0;z<12;z++){let G=z/12*Math.PI*2;J.add(new cn(A(O,G,80),f(p,.15)))}m.add(J);let K=.25,X=new ts(K,1),nt=new Yr(X),ot=f(M,.9),ft=new Gr(nt,ot);m.add(ft);let gt=new ei({color:M,transparent:!0,opacity:.15,blending:zn}),St=new je(new Zr(.15,16,16),gt);m.add(St);let Kt=new ei({color:h,transparent:!0,opacity:.04,blending:zn}),_e=new je(new Zr(.5,16,16),Kt);m.add(_e);let jt=["sys.init()","0xFF3A","malloc()",">> SCAN","void*","ACK","SYNC OK","ptr_ref","exec()","hash256","::bind","core.0","01101001","10110100",">>> RDY","HEAP 4K","TCP/SYN","mutex.lk","IRQ 0x7","DMA xfer","REG EAX","FAULT 0","kernel.d","pipe |>","chmod +x","fork()","SIGTERM","eth0: UP","AES-256","RSA 4096","TLS 1.3","HTTP/2","latency","200 OK","PATCH /","fn main","use std","impl Orb","async {}","spawn()","arc::new",".unwrap"];function tt(z,G=.08){let Z=document.createElement("canvas");Z.width=256,Z.height=32;let et=Z.getContext("2d");et.font="bold 14px Courier New";let rt=.35+Math.random()*.55;et.fillStyle=`rgba(180, ${145+Math.random()*30|0}, 235, ${rt})`,et.textAlign="center",et.textBaseline="middle",et.fillText(z,128,16);let ct=new Wr(Z);ct.minFilter=Ze;let R=new sa(new zr({map:ct,transparent:!0,blending:zn,depthWrite:!1}));return R.scale.set(G*5,G*.7,1),R}function ut(z,G,Z,et){let rt=new En;for(let ct=0;ct<z;ct++){let R=tt(jt[Math.floor(Math.random()*jt.length)],G()),it=Math.acos(2*Math.random()-1),W=Math.random()*Math.PI*2,st=Z();R.position.set(st*Math.sin(it)*Math.cos(W),st*Math.cos(it),st*Math.sin(it)*Math.sin(W)),R.userData={phi:it,theta:W,r:st,speed:(et[0]+Math.random()*et[1])*(Math.random()>.5?1:-1)},rt.add(R)}return rt}let at=ut(1200,()=>.04+Math.random()*.04,()=>w+.03+Math.random()*.08,[2e-4,8e-4]);m.add(at);let Ot=ut(100,()=>.03+Math.random()*.03,()=>O+.02,[5e-4,.001]);m.add(Ot);let Bt=ut(400,()=>.03,()=>O+.2+Math.random()*(w-O-.3),[3e-4,6e-4]);m.add(Bt);let Ut=[new ts(.012,0),new ts(.02,0),new ts(.03,1),new ts(.008,0),new fa(.015,0),new ha(.018,0)],be=[];for(let z=0;z<250;z++){let G=Ut[Math.floor(Math.random()*Ut.length)],Z=new ei({color:Math.random()>.7?d:h,transparent:!0,opacity:.3+Math.random()*.6,blending:zn}),et=new je(G,Z),rt=1.2+Math.random()*4,ct=(.08+Math.random()*.6)*(Math.random()>.5?1:-1),R=(Math.random()-.5)*Math.PI*.9,it=(Math.random()-.5)*Math.PI*.5,W=Math.random()*Math.PI*2;if(et.userData={orbitR:rt,speed:ct,tiltX:R,tiltZ:it,phase:W},be.push(et),m.add(et),Math.random()>.85){let st=[];for(let $=0;$<=15;$++){let xt=-($/15)*.3;st.push(new P(rt*Math.cos(xt+W),rt*.08*Math.sin(xt*3),rt*Math.sin(xt+W)))}let ht=new cn(new le().setFromPoints(st),f(_,.08));et.add(ht)}}let Ht=2e3,ie=new Float32Array(Ht*3);for(let z=0;z<Ht;z++){let G=.5+Math.pow(Math.random(),.6)*7,Z=Math.random()*Math.PI*2,et=Math.acos(2*Math.random()-1);ie[z*3]=G*Math.sin(et)*Math.cos(Z),ie[z*3+1]=G*Math.cos(et),ie[z*3+2]=G*Math.sin(et)*Math.sin(Z)}let Jt=new le;Jt.setAttribute("position",new se(ie,3));let Xt=document.createElement("canvas");Xt.width=Xt.height=64;let Se=Xt.getContext("2d"),xe=Se.createRadialGradient(32,32,0,32,32,32);xe.addColorStop(0,"rgba(190,160,245,1)"),xe.addColorStop(.2,"rgba(145,100,210,0.6)"),xe.addColorStop(.5,"rgba(100,60,155,0.15)"),xe.addColorStop(1,"rgba(50,25,80,0)"),Se.fillStyle=xe,Se.fillRect(0,0,64,64);let Ge=new Hr({map:new Wr(Xt),size:.04,transparent:!0,opacity:.5,blending:zn,depthWrite:!1,sizeAttenuation:!0,color:d}),He=new oa(Jt,Ge);m.add(He);function ve(z,G=.015){let Z=new da(z-G,z+G,120),et=new ei({color:d,transparent:!0,opacity:0,blending:zn,side:ni,depthWrite:!1}),rt=new je(Z,et);return rt.rotation.x=Math.PI/2,rt}let ye=ve(w,.01),D=ve(w*.7,.008);m.add(ye,D);for(let z=0;z<15;z++){let G=Math.acos(2*Math.random()-1),Z=Math.random()*Math.PI*2,et=w+.02,rt=new ca(.03+Math.random()*.02,6),ct=new Yr(rt),R=new Gr(ct,f(h,.5));R.position.set(et*Math.sin(G)*Math.cos(Z),et*Math.cos(G),et*Math.sin(G)*Math.sin(Z)),R.lookAt(0,0,0),y.add(R)}let Fe=new Ts,qt=new P;function T(z,G){qt.copy(s.position).sub(u.target),Fe.setFromVector3(qt),Fe.theta-=z,Fe.phi=$r.clamp(Fe.phi-G,.05,Math.PI-.05),Fe.makeSafe(),qt.setFromSpherical(Fe),s.position.copy(u.target).add(qt),s.lookAt(u.target)}function g(z){qt.copy(s.position).sub(u.target);let G=$r.clamp(qt.length()*z,x1,v1);qt.setLength(G),s.position.copy(u.target).add(qt)}function N(){s.position.copy(_1),u.target.set(0,0,0),s.lookAt(u.target),u.update()}let V=new _a,q=0,lt=0,dt=!1;function Y(){if(dt)return;lt=requestAnimationFrame(Y);let z=V.getElapsedTime();y.rotation.y+=.0015,y.rotation.x=Math.sin(z*.08)*.05,I.rotation.y+=.0018,I.rotation.x=Math.sin(z*.08+.5)*.04,F.rotation.y-=.001,F.rotation.z=Math.sin(z*.12)*.03,J.rotation.y-=.005,J.rotation.z+=.002,J.rotation.x=Math.cos(z*.1)*.08,ft.rotation.x+=.008,ft.rotation.y+=.012;let G=Math.sin(z*1.2),Z=Math.pow(Math.max(0,Math.sin(z*.4)),5),et=Math.pow(Math.max(0,Math.sin(z*.7+2)),8),rt=Math.pow(Math.max(0,Math.sin(z*.25)),3),ct=Z*1.5+et*2,R=1+ct+Math.sin(z*5)*.05;St.scale.setScalar(R);let it=Math.max(0,(.08+G*.05+ct*.2)*(1-rt*.95));gt.opacity=Math.min(.6,it),_e.scale.setScalar(1+ct*.8),Kt.opacity=Math.max(0,(.03+ct*.08)*(1-rt*.9)),ft.scale.setScalar(1+ct*.6),ot.opacity=Math.min(1,.5+ct*.4),be.forEach(yt=>{let $t=yt.userData,Qt=z*$t.speed+$t.phase;yt.position.set($t.orbitR*Math.cos(Qt)*Math.cos($t.tiltX),$t.orbitR*Math.sin($t.tiltX)*Math.sin(Qt*.8)+Math.sin(Qt*.3+$t.tiltZ)*.2,$t.orbitR*Math.sin(Qt)*Math.cos($t.tiltZ)),yt.rotation.x+=.015,yt.rotation.z+=.01});let W=[[at,1],[Ot,2],[Bt,1.2]];for(let[yt,$t]of W)yt.children.forEach(Qt=>{let Oe=Qt.userData;Oe.theta+=Oe.speed*$t,Qt.position.set(Oe.r*Math.sin(Oe.phi)*Math.cos(Oe.theta),Oe.r*Math.cos(Oe.phi),Oe.r*Math.sin(Oe.phi)*Math.sin(Oe.theta))});let st=Math.sin(z*.4)*w;ye.position.y=st;let ht=Math.sqrt(Math.max(0,w*w-st*st))/w;ye.scale.set(ht,ht,1),ye.material.opacity=.2*ht;let $=Math.sin(z*.6+2)*O;D.position.y=$;let xt=Math.sqrt(Math.max(0,O*O-$*$))/O;D.scale.set(xt,xt,1),D.material.opacity=.15*xt,He.rotation.y+=2e-4,q+=.016,q>.1&&(q=0,I.children.forEach(yt=>{Math.random()>.95&&(yt.visible=!yt.visible)})),a.strength=.8+Math.sin(z*.8)*.15,c.uniforms.uTime.value=z,u.update(),o.render()}Y();function Q(){let z=e.clientWidth,G=e.clientHeight;s.aspect=z/G,s.updateProjectionMatrix(),r.setSize(z,G),o.setSize(z,G)}window.addEventListener("resize",Q);function pt(){dt=!0,cancelAnimationFrame(lt),window.removeEventListener("resize",Q),u.dispose(),i.traverse(z=>{let G=z;G.geometry&&G.geometry.dispose();let Z=Array.isArray(G.material)?G.material:[G.material];for(let et of Z){if(!et)continue;et.map?.dispose(),et.dispose()}}),o.dispose(),r.dispose(),r.domElement.remove()}return{rotateBy:T,zoomBy:g,zoomIn:()=>g(.65),zoomOut:()=>g(1.55),resetView:N,dispose:pt}}export{ip as HandTracker,jC as createOrbScene};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
