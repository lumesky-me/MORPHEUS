"""Verify history/stream event custody without starting any Gateway process."""
import threading
from preview_gateway import DashboardGateway
bridge=DashboardGateway.__new__(DashboardGateway)
bridge.lock=threading.Lock();bridge.events=[];bridge.sequence=0
bridge._event({'type':'sessions-conversation','key':'one','messages':[{'id':'image','content':'retained-media'}]})
bridge._event({'type':'sessions-stream','key':'one','messages':[{'id':'live','text':'First'}]})
bridge._event({'type':'sessions-stream','key':'one','messages':[{'id':'live','text':'Newest'}]})
page=bridge.snapshot(0)['events'];assert len(page)==2
assert page[0]['data']['messages'][0]['id']=='image'
assert page[1]['data']['messages'][0]['text']=='Newest'
after=page[-1]['sequence']
bridge._event({'type':'sessions-conversation','key':'one','messages':[{'id':'saved','text':'Final persisted answer'}]})
assert all(e['data']['type']!='sessions-stream' for e in bridge.snapshot(0)['events'])
assert bridge.snapshot(after)['events'][0]['data']['messages'][0]['id']=='saved'
print('PASS baseline rich history retained alongside latest stream; terminal persisted history retires obsolete stream. No live Gateway.')
